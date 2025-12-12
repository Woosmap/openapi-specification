module.exports = ProcessTags;

function ProcessTags(options = {}) {
    const {
        tagMappings = {},
        tagsToDelete = [],
        sortOrder = {}
    } = options;

    const METHODS = ['get', 'post', 'put', 'delete', 'patch'];

    return {
        Root: {
            leave(root) {
                if (!root.tags) root.tags = [];

                const tagNameMapping = {};

                // 1. Rename tags
                root.tags = root.tags.map(tag => {
                    const newTag = {...tag};
                    delete newTag['x-displayName'];

                    const mapping = tagMappings[newTag.name];
                    if (mapping) {
                        if (typeof mapping === 'string') {
                            tagNameMapping[newTag.name] = mapping;
                            newTag.name = mapping;
                        } else {
                            if (mapping.name) {
                                tagNameMapping[newTag.name] = mapping.name;
                                newTag.name = mapping.name;
                            }
                        }
                    }
                    return newTag;
                });

                // 2. Filter deleted tags
                if (tagsToDelete.length > 0) {
                    root.tags = root.tags.filter(tag => !tagsToDelete.includes(tag.name));
                }

                // 3. Merge duplicates
                const tagMap = new Map();
                root.tags.forEach(tag => {
                    if (tagMap.has(tag.name)) {
                        const existing = tagMap.get(tag.name);
                        if (tag.description && !existing.description) {
                            existing.description = tag.description;
                            if (tag.externalDocs) existing.externalDocs = tag.externalDocs;
                        }
                    } else {
                        tagMap.set(tag.name, tag);
                    }
                });

                // 4. Inject authoritative config definitions
                Object.keys(tagMappings).forEach(sourceName => {
                    const mapping = tagMappings[sourceName];

                    if (typeof mapping === 'object' && mapping.name && mapping.description) {
                        const targetName = mapping.name;
                        let tagEntry = tagMap.get(targetName);

                        if (!tagEntry) {
                            tagEntry = {name: targetName};
                            tagMap.set(targetName, tagEntry);
                        }

                        tagEntry.description = mapping.description;
                        if (mapping.externalDocs) {
                            tagEntry.externalDocs = mapping.externalDocs;
                        }
                    }

                    const name = typeof mapping === 'string' ? mapping : mapping.name;
                    tagNameMapping[sourceName] = name;
                });

                root.tags = Array.from(tagMap.values());

                // 5. Update operations
                if (root.paths) {
                    Object.keys(root.paths).forEach(path => {
                        const pathItem = root.paths[path];

                        Object.keys(pathItem).forEach(method => {
                            const operation = pathItem[method];
                            if (!operation || !operation.tags) return;

                            if (operation.tags.some(t => tagsToDelete.includes(t))) {
                                delete pathItem[method];
                                return;
                            }

                            const originalTag = operation.tags[0];

                            operation.tags = operation.tags
                                .map(tag => tagNameMapping[tag] || tag)
                                .filter(tag => !tagsToDelete.includes(tag));

                            if (tagNameMapping[originalTag]) {
                                operation['x-original-tag'] = originalTag;
                            }
                        });

                        if (Object.keys(pathItem).length === 0) {
                            delete root.paths[path];
                        }
                    });

                    // 6. Sort paths
                    if (Object.keys(sortOrder).length > 0) {
                        const getPrimaryTag = (pathItem) => {
                            for (const method of METHODS) {
                                if (pathItem[method]?.tags?.[0]) return pathItem[method].tags[0];
                            }
                            return 'Other';
                        };

                        const getOriginalTag = (pathItem) => {
                            for (const method of METHODS) {
                                if (pathItem[method]?.['x-original-tag']) return pathItem[method]['x-original-tag'];
                                if (pathItem[method]?.tags?.[0]) return pathItem[method].tags[0];
                            }
                            return null;
                        };

                        const getPathScore = (pathItem, currentTag) => {
                            const order = sortOrder[currentTag];
                            if (!order) return 999;
                            const originalKey = getOriginalTag(pathItem);
                            if (!originalKey) return 999;
                            const index = order.findIndex(keyword =>
                                originalKey.toLowerCase().includes(keyword.toLowerCase())
                            );
                            return index === -1 ? 999 : index;
                        };

                        const sortedPaths = Object.entries(root.paths).sort(([_, itemA], [__, itemB]) => {
                            const tagA = getPrimaryTag(itemA);
                            const tagB = getPrimaryTag(itemB);

                            if (tagA !== tagB) return tagA.localeCompare(tagB);

                            const scoreA = getPathScore(itemA, tagA);
                            const scoreB = getPathScore(itemB, tagB);
                            return scoreA - scoreB;
                        });

                        root.paths = Object.fromEntries(sortedPaths);
                    }
                }

                return root;
            }
        }
    };
}
