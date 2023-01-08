const baseSetting = require('config/eslint.base.js')
module.exports = {
  ...baseSetting,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  globals: {
    JSX: true,
  },
}
