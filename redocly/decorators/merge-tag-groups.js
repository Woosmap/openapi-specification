module.exports = MergeTagGroups;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * A decorator that deletes tag groups inherited from Join command.
 * @returns {Object} The decorator.
 */
function MergeTagGroups() {
    return {
        Root: {
            leave(root) {
                // If there are no tag groups, or no x-tagGroups extension, return as is
                if (!root['x-tagGroups'] || !root['x-tagGroups'].length) {
                    return root;
                }

                delete root['x-tagGroups'];

                return root;
            }
        }
    };
}
