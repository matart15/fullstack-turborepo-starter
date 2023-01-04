module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  ignorePatterns: ['src/ui-components/*'],
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
            allow: ['src'],
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
            disallow: ['@aws-amplify/ui-react'],
          },
        ],
      },
    ],
  },
  settings: {
    'boundaries/elements': [
      {
        type: 'src',
        pattern: 'src/**',
        mode: 'folder',
        // "capture": ["category", "elementName"]
      },
      {
        type: 'views',
        pattern: 'views/**',
        mode: 'folder',
        // "capture": ["family", "elementName"]
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
