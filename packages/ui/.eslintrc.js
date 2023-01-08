module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  // ignorePatterns: ['src/ui-components/*'],
  rules: {
    'boundaries/element-types': [
      2,
      {
        // disallow all local imports by default
        default: 'disallow',
        rules: [
          {
            // from helper elements
            from: ['views'],
            // allow importing helper elements
            allow: ['components'],
          },
        ],
      },
    ],
    'boundaries/external': [
      2,
      {
        // disallow all external imports by default
        default: 'allow',
        rules: [
          {
            from: ['views'],
            disallow: ['antd'],
          },
        ],
      },
    ],
  },
  settings: {
    'boundaries/elements': [
      {
        type: 'views',
        pattern: 'views/**',
        mode: 'folder',
      },
      {
        type: 'components',
        pattern: 'components/**',
        mode: 'folder',
      },
    ],
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  globals: {
    JSX: true,
  },
};
