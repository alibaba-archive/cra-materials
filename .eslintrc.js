const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  "env": {
    "jest": true
  },
  rules: {},
});
