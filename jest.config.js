/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest", // Use Babel for TypeScript transformation
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"], // Add Jest matchers for React Native
  testEnvironment: "node", // Ensure a suitable test environment for React Native
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // File extensions to resolve
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock styles
  },
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: ["src/**/*.{ts,tsx}"], // Collect coverage from TS files
  coverageReporters: ["json", "lcov"], // Set coverage report formats
};