const AddSecurityDisplayName = require('./decorators/add-security-display-name.js');
const MergeTagGroups = require('./decorators/merge-tag-groups.js');
const ProcessTags = require('./decorators/process-tags.js');
const TagGroups = require('./decorators/tag-groups.js');
const ValidateTags = require('./rules/validate-tags.js');

/**
 * The Woosmap plugin for Redocly CLI.
 */
module.exports = function woosmapPlugin() {
  return {
    id: 'woosmap',
    decorators: {
      oas3: {
        'add-security-display-name': AddSecurityDisplayName,
        'merge-tag-groups': MergeTagGroups,
        'process-tags': ProcessTags,
        'tag-groups': TagGroups,
      },
    },
    rules: {
      oas3: {
        'validate-tags': ValidateTags,
      },
    },
  };
};