module.exports = ProcessTags;

/**
 * A decorator that processes tags to improve their names
 */
function ProcessTags(options = {}) {
    const {
        tagMappings = {},
        tagsToDelete = []
    } = options;
    
    return {
        Root: {
            leave(root) {
                if (!root.tags || !root.tags.length) {
                    return root;
                }

                const tagNameMapping = {};

                root.tags = root.tags.map(tag => {
                    const newTag = {...tag};
                    delete newTag['x-displayName']; 
                    
                    if (tagsToDelete.includes(newTag.name)) {
                        return newTag;
                    }
                    
                    if (tagMappings[newTag.name]) {
                        const mapping = tagMappings[newTag.name];
                        
                        if (typeof mapping === 'string') {
                            tagNameMapping[newTag.name] = mapping;
                            return {
                                ...newTag,
                                name: mapping
                            };
                        } else {
                            if (mapping.name) {
                                tagNameMapping[newTag.name] = mapping.name;
                            }
                            
                            return {
                                ...newTag,
                                name: mapping.name || newTag.name,
                                description: mapping.description || newTag.description,
                                externalDocs: mapping.externalDocs || newTag.externalDocs
                            };
                        }
                    } 
                    
                    return newTag;
                });

                // Remove tags that should be deleted
                if (tagsToDelete.length > 0) {
                    root.tags = root.tags.filter(tag => !tagsToDelete.includes(tag.name));
                }

                // Remove duplicate tags by name
                const processedNames = new Set();
                root.tags = root.tags.filter(tag => {
                    if (processedNames.has(tag.name)) {
                        return false;
                    }
                    processedNames.add(tag.name);
                    return true;
                });

                // Update operation tags
                if (Object.keys(tagNameMapping).length > 0 && root.paths) {
                    Object.values(root.paths).forEach(pathItem => {
                        Object.values(pathItem).forEach(operation => {
                            if (operation && operation.tags) {
                                operation.tags = operation.tags.map(tag => 
                                    tagNameMapping[tag] || tag
                                );
                            }
                        });
                    });
                }

                return root;
            }
        }
    };
}
