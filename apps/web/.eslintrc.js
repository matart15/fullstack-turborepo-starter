module.exports = {
  root: true,
  extends: ['custom'],
  ignorePatterns: ['types/graphql.tsx'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
