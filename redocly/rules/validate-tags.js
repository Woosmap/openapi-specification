module.exports = ValidateTagsRule;

/**
 * Validate that all expected tag names are present and all operations have valid tags
 */
function ValidateTagsRule(options = {}) {
  const expectedNames = options.expectedNames || [];
  
  return {
    Root: {
      leave(root, ctx) {
        // Verify tags exist
        if (!root.tags || !Array.isArray(root.tags)) {
          ctx.report({
            message: 'OpenAPI specification is missing tags array',
            severity: 'error',
          });
          return;
        }

        // Get all defined tag names
        const definedNames = root.tags.map(tag => tag.name).filter(Boolean);

        // Check if all expected names are present
        const missingNames = expectedNames.filter(
          name => !definedNames.includes(name)
        );
        
        if (missingNames.length > 0) {
          ctx.report({
            message: `Missing expected tag names: ${missingNames.join(', ')}`,
            severity: 'error',
          });
        }

        // Collect all operation tags
        const usedTags = new Set();
        if (root.paths) {
          Object.values(root.paths).forEach(pathItem => {
            Object.entries(pathItem).forEach(([method, operation]) => {
              if (typeof operation === 'object' && !['parameters', 'servers'].includes(method)) {
                if (operation.tags && Array.isArray(operation.tags)) {
                  operation.tags.forEach(tag => usedTags.add(tag));
                }
              }
            });
          });
        }

        // Check if all used tags are defined
        const definedTagNames = new Set(definedNames);
        const undefinedTags = [...usedTags].filter(tag => !definedTagNames.has(tag));
        
        if (undefinedTags.length > 0) {
          ctx.report({
            message: `Operations use undefined tags: ${undefinedTags.join(', ')}`,
            severity: 'error',
          });
        }
      }
    },

    Operation: {
      leave(operation, ctx) {
        // Check if operation has tags
        if ((!operation.tags || operation.tags.length === 0) && options.requireOperationTags) {
          ctx.report({
            message: 'Operation is missing tags',
            location: ctx.location,
            severity: 'error',
          });
        }
      }
    }
  };
}
