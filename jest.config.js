// module.exports = {
//   preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
//   transform: {
//     "^.+\\.vue$": "vue-jest",
//   },
// };

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  globals: {},
  testMatch: ['**/*.spec.(js|ts)'],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\ts$": "ts-jest"
  },
  collectCoverage: true,
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  coverageReporters: ['html', 'text', 'lcov','json'],
  coverageDirectory: 'unitTests/coverage',
  collectCoverageFrom: [
    'src/use/useAmountInWords.ts',
  ]
};
