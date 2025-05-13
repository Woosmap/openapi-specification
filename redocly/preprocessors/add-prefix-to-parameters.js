module.exports = function AddPrefixToParameters() {
  return {
    Parameter: {
      enter(parameter, { key, parent }) {
        if (key && typeof key === 'string') {
          const prefix = 'MyPrefix_'; // Replace with your desired prefix
          const newKey = `${prefix}${key}`;

          // Rename the parameter key
          parent[newKey] = parameter;
          delete parent[key];

          // Update all $refs in the document
          updateRefs(this.document, `#/components/parameters/${key}`, `#/components/parameters/${newKey}`);
        }
      },
    },
  };
};

/**
 * Recursively updates $ref values in the OpenAPI document.
 * @param {object} obj - The OpenAPI document or a part of it.
 * @param {string} oldRef - The old $ref value to replace.
 * @param {string} newRef - The new $ref value to use.
 */
function updateRefs(obj, oldRef, newRef) {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (key === '$ref' && obj[key] === oldRef) {
        obj[key] = newRef;
      } else {
        updateRefs(obj[key], oldRef, newRef);
      }
    }
  }
}