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
  ignorePatterns: ['prisma/@generated', '.eslintrc.js', 'dist', 'node_modules', '.turbo'],
  rules: {
    '@next/next/no-assign-module-variable': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
