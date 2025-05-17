module.exports = RemoveUnusedTags;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * Returns a decorator that removes unused tags from operations.
 * @returns {Object} The decorator.
 */
function RemoveUnusedTags() {
    const usedTags = new Set();

    return {
        Operation: {
            leave(operation) {
                if (operation.tags) {
                    operation.tags.forEach(tag => usedTags.add(tag));
                }
            }
        },
        Root: {
            leave(root) {
                if (root.tags) {
                    root.tags = root.tags.filter(tag => usedTags.has(tag.name));
                }
            }
        }
    }
}
