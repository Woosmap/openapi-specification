const AddPrefixToParameters = require('./preprocessors/add-prefix-to-parameters');

const id = 'plugin';

/** @type {import('@redocly/cli').PreprocessorsConfig} */
const preprocessors = {
  oas3: {
    'add-prefix-to-parameters': AddPrefixToParameters,
  },
};

module.exports = {
  id,
  preprocessors,
};