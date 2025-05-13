module.exports = ProcessTags;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * A decorator that processes tags to improve their display names and handles specific API cases.
 * It's designed to fix issues with tags created during the Join command.
 * 
 * @param {Object} options Configuration options
 * @param {Object} options.tagMappings Custom mappings for specific tags with displayName, description, and externalDocs
 * @param {Array<string>} options.tagsToDelete Tags to be removed completely
 * @returns {Object} The decorator
 */
function ProcessTags(options = {}) {
    const {
        tagMappings = {},
        tagsToDelete = []
    } = options;
    
    return {
        Root: {
            leave(root) {
                // If there are no tags, return as is
                if (!root.tags || !root.tags.length) {
                    return root;
                }

                // Process tags to improve displayNames and fix specific cases
                root.tags = root.tags.map(tag => {
                    if (tagsToDelete.includes(tag.name)) {
                        return tag;
                    }
                    
                    // Handle specific tag mappings from parameters
                    if (tagMappings[tag.name]) {
                        const mapping = tagMappings[tag.name];
                        
                        if (typeof mapping === 'string') {
                            return {
                                ...tag,
                                'x-displayName': mapping
                            };
                        } else {
                            return {
                                ...tag,
                                description: mapping.description || tag.description,
                                'x-displayName': mapping.displayName,
                                externalDocs: mapping.externalDocs || tag.externalDocs
                            };
                        }
                    }
                    
                    return tag;
                });

                // Remove tags that should be deleted
                if (tagsToDelete.length > 0) {
                    root.tags = root.tags.filter(tag => !tagsToDelete.includes(tag.name));
                }

                // Remove duplicate tags by x-displayName
                const processedDisplayNames = new Set();
                root.tags = root.tags.filter(tag => {
                    // Avoid duplicates by display name
                    if (processedDisplayNames.has(tag['x-displayName'])) {
                        return false;
                    }
                    
                    processedDisplayNames.add(tag['x-displayName']);
                    return true;
                });

                return root;
            }
        }
    };
}
