// Jest configuration file for a React project
// using Babel for transpilation
module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js", 
      "\\.(css|scss)$": "identity-obj-proxy" 
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    reporters: [
      "default",
      ["jest-stare", {
        resultDir: "jest-test-results", 
        reportTitle: "Jest Test Report"
      }]
    ]
  };
  