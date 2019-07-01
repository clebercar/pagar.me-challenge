module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: "__tests__/coverage",
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/__tests__/'],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
  ],
}
