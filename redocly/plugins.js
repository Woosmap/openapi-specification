const AddSecurityDisplayName = require('./decorators/add-security-display-name.js');
const MergeTagGroups = require('./decorators/merge-tag-groups.js');
const ProcessTags = require('./decorators/process-tags.js');

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
      },
    },
  };
};