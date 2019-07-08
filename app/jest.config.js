module.exports = {
  bail: true,
  verbose: true,
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/setup.js'
  ],
  clearMocks: true,
  coverageDirectory: '__tests__/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/__tests__/'],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)'
  ]
}
