/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { getJestConfig } = require('@storybook/test-runner');

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/test-runner/playwright/transform',
    '^.+\\.[jt]sx?$': 'ts-jest',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./mocks/fileMock.js",
    "\\.(css|less)$": "./mocks/fileMock.js"
    // '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "atoms/**/*.tsx",
    "views/**/*.tsx",
    "components/**/*.tsx",
  ],
  // coverageThreshold: {
  //   "atoms/**/*.tsx": {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  //   "components/**/*.tsx": {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  //   "views/**/*.tsx": {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
}