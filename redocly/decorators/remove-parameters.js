module.exports = RemoveParameters;

/** @type {import('@redocly/cli').OasDecorator} */
const openAPIExtensions = /x-*/;

/**
 * Asserts a condition and throws an error if the condition is not met.
 * @param {boolean} condition - The condition to assert.
 * @param {string} [message] - The error message to throw if the condition is not met.
 */
function assert(condition, message = 'An error occurred') {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Removes a parameter from a node.
 * @param {Object} node - The node to remove the parameter from.
 * @param {string} param - The parameter to remove.
 */
function removeParamFromNode(node, param) {
    assert(typeof param === 'string', 'Parameter must be a string');
    delete node[param];
    console.log('Deleted parameter "%s" from object "%O"', param, node);
}

/**
 * Removes parameters from a node. If no parameters are specified, all parameters starting with "x-" are removed.
 * @param {Object} node - The node to remove the parameters from.
 * @param {string|string[]} parameters - The parameters to remove.
 */
function removeParametersFromNode(node, parameters) {
    const parametersType = typeof parameters;
    assert(
        parametersType === 'undefined' || parametersType === 'string' || parametersType === 'object',
        `Parameters must be a string or an array of strings, but received type "${parametersType}"`
    );
    if (!parameters) {
        console.log('Deleting all OpenAPI extensions (parameters starting with "x-")...');
        Object.keys(node).filter(param => param.match(openAPIExtensions)).forEach(param => removeParamFromNode(node, param));
    } else if (parametersType === 'string') {
        Object.keys(node).filter(param => param.match(parameters)).forEach(param => removeParamFromNode(node, param));
    } else {
        parameters.forEach(parameter => {
            Object.keys(node).filter(param => param.match(parameter)).forEach(param => removeParamFromNode(node, param));
        });
    }
}

/**
 * Returns a decorator that removes parameters from nodes.
 * @param {Object} options - The options for the decorator.
 * @param {string|string[]} options.parameters - The parameters to remove.
 * @returns {Object} The decorator.
 */
function RemoveParameters({parameters}) {
    return {
        any: {
            enter: (node) => removeParametersFromNode(node, parameters),
        }
    }
}
