module.exports = OneSecurityScheme;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * Returns a decorator that retains only one security scheme.
 * @param {Object} options - The options for the decorator.
 * @param {string} options.securitySchemeName - The name of the security scheme to retain.
 * @returns {Object} The decorator.
 */
function OneSecurityScheme({securitySchemeName}) {
    return {
        Components: {
            leave(components) {
                if (components.securitySchemes && components.securitySchemes[securitySchemeName]) {
                    components.securitySchemes = {
                        [securitySchemeName]: components.securitySchemes[securitySchemeName]
                    };
                }
            }
        },
        Root: {
            leave(root) {
                if (root.security) {
                    root.security = root.security.filter(secName => securitySchemeName in secName);
                }
            }
        },
        Operation: {
            leave(target) {
                if (target.security) {
                    target.security = target.security.filter(secName => securitySchemeName in secName);
                }
            }
        }
    }
}
