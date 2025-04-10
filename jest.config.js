const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/jest-transformer.js",
  },
};

module.exports = createJestConfig(customJestConfig);
