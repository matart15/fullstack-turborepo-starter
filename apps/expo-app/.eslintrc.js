module.exports = {
  root: true,
  extends: ['custom'],
  ignorePatterns: [],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
