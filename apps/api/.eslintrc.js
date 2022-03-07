module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist', 'node_modules', '.turbo'],
  // rules: {
  //   '@typescript-eslint/interface-name-prefix': 'off',
  //   '@typescript-eslint/explicit-function-return-type': 'off',
  //   '@typescript-eslint/explicit-module-boundary-types': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  // },
};
