module.exports = {
  ...require('config/jest-common'),
  // preset: "ts-jest",
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "<rootDir>/tsconfig.json",
  //   },
  // },
  // testEnvironment: "jest-environment-jsdom",
  testMatch: ['./**/*.test.ts', './**/*.steps.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts'],
  // coverageProvider: "v8",
  coveragePathIgnorePatterns: ['./testHelper.ts', '<rootDir>/index.ts'],
  coverageProvider: 'babel',
  coverageThreshold: {
    '**/*.ts': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )

        module: {
          type: 'commonjs', // 出力するファイルをcommonjsとする
        },

        jsc: {
          parser: {
            syntax: 'typescript', // ソースコードをtypescriptとしてパースする
            tsx: true, // jsx記法を許可する
          },

          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['!node_modules/'],
};
