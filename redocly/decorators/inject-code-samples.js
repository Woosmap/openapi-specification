/**
 * Redocly decorator to inject x-codeSamples and custom responses
 * into external OpenAPI specifications (distance, transit, etc.)
 */

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

module.exports = InjectCodeSamples;

function InjectCodeSamples(options) {
    // Support both inline mappings and external file
    let mappings = options.mappings || {};

    if (options.mappingsFile) {
        const mappingsPath = path.resolve(process.cwd(), options.mappingsFile);
        if (fs.existsSync(mappingsPath)) {
            const mappingsContent = fs.readFileSync(mappingsPath, 'utf8');
            const mappingsData = yaml.parse(mappingsContent);
            mappings = mappingsData.mappings || {};
        }
    }

    return {
        PathItem: {
            leave(pathItem, ctx) {
                // Process each HTTP method
                ['get', 'post', 'put', 'patch', 'delete'].forEach((method) => {
                    const operation = pathItem[method];
                    if (!operation || !operation.operationId) return;

                    const mapping = mappings[operation.operationId];
                    if (!mapping) {
                        return;
                    }

                    // Inject x-codeSamples
                    if (mapping.regionTag && mapping.snippetPath) {
                        const codeSamples = loadCodeSamples(
                            mapping.regionTag,
                            mapping.snippetPath
                        );
                        if (codeSamples && codeSamples.length > 0) {
                            operation['x-codeSamples'] = codeSamples;
                        }
                    }

                    // Inject request body example
                    if (mapping.requestPath && operation.requestBody) {
                        const requestData = loadResponse(mapping.requestPath);
                        if (requestData) {
                            injectRequestBodyExample(operation.requestBody, requestData);
                        }
                    }

                    // Inject custom response examples
                    if (mapping.responsePath && operation.responses) {
                        const responseData = loadResponse(mapping.responsePath);
                        if (responseData) {
                            injectResponseExample(
                                operation.responses,
                                responseData,
                                mapping.responseCode || '200'
                            );
                        }
                    }
                });
            },
        },
    };
}

/**
 * Load code samples from generated snippet files
 */
function loadCodeSamples(regionTag, snippetBasePath) {
    const samples = [];
    const languages = ['curl', 'javascript', 'python'];
    const snippetDir = path.join(process.cwd(), snippetBasePath, regionTag);

    if (!fs.existsSync(snippetDir)) {
        return null;
    }

    languages.forEach((lang) => {
        const snippetFile = path.join(
            snippetDir,
            `${regionTag}.${lang}.yml`
        );

        if (fs.existsSync(snippetFile)) {
            try {
                const content = fs.readFileSync(snippetFile, 'utf8');
                const snippet = yaml.parse(content);

                if (snippet && snippet.lang && snippet.source) {
                    samples.push({
                        lang: snippet.lang,
                        label: snippet.label || lang,
                        source: snippet.source,
                    });
                }
            } catch (error) {
                console.warn(`Failed to load snippet: ${snippetFile}`, error.message);
            }
        }
    });

    return samples.length > 0 ? samples : null;
}

/**
 * Load response example from YAML file
 */
function loadResponse(responsePath) {
    const fullPath = path.join(process.cwd(), responsePath);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    try {
        const content = fs.readFileSync(fullPath, 'utf8');
        return yaml.parse(content);
    } catch (error) {
        console.warn(`Failed to load response: ${responsePath}`, error.message);
        return null;
    }
}

/**
 * Inject request body example into the operation
 */
function injectRequestBodyExample(requestBody, requestData) {
    if (!requestBody.content) return;

    // Find application/json content type
    const jsonContent = requestBody.content['application/json'];
    if (!jsonContent) return;

    jsonContent.example = requestData;
}

/**
 * Inject response example into the operation
 */
function injectResponseExample(responses, responseData, statusCode = '200') {
    const response = responses[statusCode];
    if (!response || !response.content) return;

    // Find application/json content type
    const jsonContent = response.content['application/json'];
    if (!jsonContent) return;

    // Add or update examples
    if (!jsonContent.examples) {
        jsonContent.examples = {};
    }

    jsonContent.examples['custom'] = {
        summary: 'Example response',
        value: responseData,
    };
}
