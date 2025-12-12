module.exports = ProcessTags;

/**
 * A decorator that processes tags to improve their names, sort them
 * and removes endpoints associated with deleted tags.
 */
function ProcessTags(options = {}) {
    const {
        tagMappings = {},
        tagsToDelete = [],
        sortOrder = {}
    } = options;

    return {
        Root: {
            leave(root) {
                if (!root.tags || !root.tags.length) {
                    root.tags = [];
                }

                const tagNameMapping = {};

                // Process and rename tags
                root.tags = root.tags.map(tag => {
                    const newTag = {...tag};
                    delete newTag['x-displayName'];

                    if (tagMappings[newTag.name]) {
                        const mapping = tagMappings[newTag.name];

                        if (typeof mapping === 'string') {
                            tagNameMapping[newTag.name] = mapping;
                            newTag.name = mapping;
                        } else {
                            if (mapping.name) tagNameMapping[newTag.name] = mapping.name;

                            newTag.name = mapping.name || newTag.name;
                            newTag.description = mapping.description || newTag.description;
                            newTag.externalDocs = mapping.externalDocs || newTag.externalDocs;
                        }
                    }

                    return newTag;
                });

                // Remove deleted tags from root.tags
                if (tagsToDelete.length > 0) {
                    root.tags = root.tags.filter(tag => !tagsToDelete.includes(tag.name));
                }

                // Remove duplicate tags
                const processedNames = new Set();
                root.tags = root.tags.filter(tag => {
                    if (processedNames.has(tag.name)) return false;
                    processedNames.add(tag.name);
                    return true;
                });

                // Update and clean up paths
                if (root.paths) {
                    Object.keys(root.paths).forEach(path => {
                        const pathItem = root.paths[path];

                        // Iterate through each HTTP method
                        Object.keys(pathItem).forEach(method => {
                            const operation = pathItem[method];
                            if (!operation || !operation.tags) return;

                            // Remove operations with deleted tags
                            const hasDeletedTag = operation.tags.some(tag =>
                                tagsToDelete.includes(tag)
                            );

                            if (hasDeletedTag) {
                                delete pathItem[method];
                                return;
                            }

                            // Preserve original tag before renaming
                            const originalTag = operation.tags[0];

                            // Rename tags in operations if mapping exists
                            operation.tags = operation.tags
                                .map(tag => tagNameMapping[tag] || tag)
                                .filter(tag => !tagsToDelete.includes(tag));

                            // Store original tag for sorting purposes
                            if (tagNameMapping[originalTag]) {
                                operation['x-original-tag'] = originalTag;
                            }
                        });

                        // If path has no methods left, remove it entirely
                        if (Object.keys(pathItem).length === 0) {
                            delete root.paths[path];
                        }
                    });

                    // Sort paths if sortOrder is provided
                    if (Object.keys(sortOrder).length > 0) {
                        const getPrimaryTag = (pathItem) => {
                            const methods = ['get', 'post', 'put', 'delete', 'patch'];
                            for (const method of methods) {
                                if (pathItem[method]?.tags?.[0]) {
                                    return pathItem[method].tags[0];
                                }
                            }
                            return 'Other';
                        };

                        const getOriginalTag = (pathItem) => {
                            const methods = ['get', 'post', 'put', 'delete', 'patch'];
                            for (const method of methods) {
                                if (pathItem[method]?.['x-original-tag']) {
                                    return pathItem[method]['x-original-tag'];
                                }
                            }
                            return null;
                        };

                        const getPathScore = (pathItem, tag) => {
                            const order = sortOrder[tag];
                            if (!order) return -1;

                            const originalTag = getOriginalTag(pathItem);
                            if (!originalTag) return -1;

                            const matchIndex = order.findIndex(keyword =>
                                originalTag.toLowerCase() === keyword.toLowerCase()
                            );

                            return matchIndex;
                        };

                        const sortedPaths = Object.entries(root.paths)
                            .sort(([keyA, itemA], [keyB, itemB]) => {
                                const tagA = getPrimaryTag(itemA);
                                const tagB = getPrimaryTag(itemB);

                                if (tagA !== tagB) {
                                    return tagA.localeCompare(tagB);
                                }

                                const scoreA = getPathScore(itemA, tagA);
                                const scoreB = getPathScore(itemB, tagB);

                                if (scoreA !== -1 && scoreB !== -1) {
                                    return scoreA - scoreB;
                                }

                                if (scoreA === -1 && scoreB === -1) {
                                    return 0;
                                }

                                return scoreA === -1 ? 1 : -1;
                            });

                        root.paths = Object.fromEntries(sortedPaths);
                    }
                }

                return root;
            }
        }
    };
}