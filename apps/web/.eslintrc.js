module.exports = {
  root: true,
  extends: ['custom'],
  ignorePatterns: ['graphql/generated.tsx'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
