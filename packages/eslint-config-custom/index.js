const mainRules = {
  'arrow-parens': ['error', 'as-needed'],
  'no-implicit-coercion': ['error', { boolean: false }],
  'object-shorthand': ['error', 'always'],
  'prettier/prettier': ['error'],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  // js
  eqeqeq: ['error', 'always'],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-undef': 'error',
  'max-lines': ['error', 200],
  'no-debugger': 'error',
  'no-plusplus': 'error',
  complexity: ['error', 10],
  'max-lines-per-function': ['error', 120],
  'max-nested-callbacks': ['error', 3],
  'max-params': ['error', 4],
  'max-depth': ['error', 4],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.test.ts'],
    },
  ],
  'no-await-in-loop': 'error',
  'no-cond-assign': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-unsafe-negation': 'error',
  'func-style': ['error', 'expression'],
  'no-alert': 'error',
  'no-confusing-arrow': 'error',
  'no-else-return': 'error',
  'no-empty': 'error',
  'no-eval': 'error',
  'no-extra-boolean-cast': 'error',
  'no-floating-decimal': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-plusplus': 'error',
  // 'import/no-default-export': ['error'],
  'import/prefer-default-export': 'off',

  // react
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
    },
  ],
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/prop-types': 'warn',
  'react/jsx-props-no-spreading': 'warn',
  'jsx-a11y/control-has-associated-label': 'warn',
  'jsx-a11y/no-static-element-interactions': 'warn',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/forbid-elements': [
    'error',
    {
      forbid: [{ element: 'button', message: 'use <Button> instead' }, 'input', 'h1', 'label', 'div', 'span', 'main'],
    },
  ],

  // next
  '@next/next/no-html-link-for-pages': 'off',

  // typescript
  '@typescript-eslint/no-unused-expressions': ['error'],
  '@typescript-eslint/explicit-function-return-type': ['error'],
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'parameter',
      format: ['PascalCase', 'camelCase'],
      leadingUnderscore: 'allow',
    },

    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/no-explicit-any': 'error', // 'off' is acceptable for existing project.
  '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-use-before-define': 'error', // 'off' is acceptable for existing project.
  'class-methods-use-this': 'off',
  // @deprecated https://github.com/palantir/tslint/
  // '@typescript-eslint/tslint/config': [
  //   'error',
  //   {
  //     rules: {
  //       // deprecation: true,
  //       'no-duplicate-imports': true,
  //       'no-duplicate-variable': [true, 'check-parameters'],
  //       'no-floating-promises': true,
  //       'no-implicit-dependencies': [true, ['node:child_process']],
  //       // 'no-import-side-effect': true,
  //       'no-shadowed-variable': true,
  //       'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  //       'trailing-comma': true,
  //       'triple-equals': true,
  //     },
  //   },
  // ],
};
const mainSettings = {
  react: {
    version: 'detect',
  },
  next: {
    rootDir: ['apps/*/', 'packages/*/'],
  },
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: ['apps/*/tsconfig.json'],
    },
  },
};
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:boundaries/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'prettier',
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'import',
    'boundaries',
  ],
  settings: mainSettings,
  rules: mainRules,
  overrides: [
    {
      files: ['**/src/**/*.[jt]s?(x)'],
      rules: {
        ...mainRules,
        'react/forbid-elements': 'off',
      },
    },
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(steps|spec|test|stories).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        ...mainRules,
        'max-nested-callbacks': ['error', 5],
        'testing-library/no-node-access': 'off',
        'jest/no-standalone-expect': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] }],
        'import/no-default-export': 'off',
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              // deprecation: true,
              'no-duplicate-imports': true,
              'no-duplicate-variable': [true, 'check-parameters'],
              'no-floating-promises': true,
              'no-implicit-dependencies': [
                true,
                [
                  'jest-cucumber',
                  '@testing-library',
                  'ink-testing-library',
                  '@storybook/react',
                  '@storybook/testing-library',
                  '@storybook/jest',
                  '@nestjs/testing',
                ],
              ],
              // 'no-import-side-effect': true,
              'no-shadowed-variable': true,
              'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
              'trailing-comma': true,
              'triple-equals': true,
            },
          },
        ],
        'boundaries/element-types': 'off',
        'boundaries/external': 'off',
      },
    },
  ],
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'public', 'styles', '.next', 'coverage', 'dist', '.turbo'],
};
