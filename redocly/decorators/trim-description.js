module.exports = TrimDescription;

/** @type {import('@redocly/cli').OasDecorator} */

/**
 * Returns a decorator that trims descriptions to a maximum length.
 * @param {Object} options - The options for the decorator.
 * @param {number} options.maxParameterDescriptionLength - The maximum length for parameter descriptions.
 * @param {number} options.maxOperationDescriptionLength - The maximum length for operation descriptions.
 * @returns {Object} The decorator.
 */
function TrimDescription({maxParameterDescriptionLength, maxOperationDescriptionLength}) {
    return {
        any: {
            enter: (node) => {
                if (node.description && typeof node.description === 'string') {
                    if (node.operationId && node.description.length > maxOperationDescriptionLength) {
                        node.description = `${node.description.substring(0, maxOperationDescriptionLength)}...`;
                    } else if (node.description.length > maxParameterDescriptionLength) {
                        node.description = `${node.description.substring(0, maxParameterDescriptionLength)}...`;
                    }
                }
            },
        },
    }
}
