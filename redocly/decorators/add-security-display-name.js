module.exports = AddSecurityDisplayName;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * A decorator that adds user-friendly display names to security schemes
 * and handles special cases like the reimport webhook.
 */
function AddSecurityDisplayName() {
    return {
        Components: {
            leave(components) {
                if (!components.securitySchemes) {
                    return components;
                }

                Object.keys(components.securitySchemes).forEach(schemeName => {
                    if (!components.securitySchemes[schemeName]['x-displayName']) {
                        const parts = schemeName.split('_');
                        components.securitySchemes[schemeName]['x-displayName'] = parts[parts.length - 1];
                    }
                });

                return components;
            }
        },

        // Special case: Dataset API reimport webhook doesn't require authentication as it uses the reimport_key
        Root: {
            leave(root) {
                if (root.paths && root.paths['/datasets/hooks/reimport/{reimport_key}']) {
                    if (root.paths['/datasets/hooks/reimport/{reimport_key}'].post) {
                        // Set empty security array on the post operation
                        root.paths['/datasets/hooks/reimport/{reimport_key}'].post.security = [];
                    }
                }
                return root;
            }
        }
    };
}