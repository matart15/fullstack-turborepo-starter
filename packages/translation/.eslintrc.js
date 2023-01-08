const baseSetting = require('config/eslint.base.js')
module.exports = {
  ...baseSetting,
  rules: {
    'import/no-default-export': 'off'
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  globals: {
    JSX: true,
  },
}
