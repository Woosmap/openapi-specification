/** @type {import('@redocly/cli').OasDecorator} */

/**
 * A decorator that organizes API documentation into tag groups.
 * It injects the 'x-tagGroups' extension into the root of the OAS definition.
 * * @param {Object} options
 * @param {Array} options.tagGroups - The list of tag groups configurations.
 * @returns {Object} The decorator visitor.
 */
function TagGroups(options = {}) {
    return {
        Root: {
            leave(root) {
                if (!options.tagGroups) {
                    throw new Error('tagGroups config must be provided via options in redocly.yaml');
                }
                root['x-tagGroups'] = options.tagGroups;
                return root;
            },
        },
    };
}

module.exports = TagGroups;