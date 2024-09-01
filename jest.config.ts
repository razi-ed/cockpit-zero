// jest.config.ts
// import type { Config } from "jest";

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "jest-environment-jsdom", // Necessary for testing components that interact with the DOM
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   moduleNameMapper: {
//     "^@components/(.*)$": "<rootDir>/app/_shared/components/$1", // Example alias
//     "^@shared/(.*)$": "<rootDir>/app/_shared/$1", // Example alias
//     "^@dashboard/(.*)$": "<rootDir>/app/(dashboard)/$1", // Example alias
//     "^@/(.*)$": "<rootDir>/$1",
//   },
//   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   moduleDirectories: ["node_modules", "<rootDir>/"],
// };

// export default config;

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/app/_shared/components/$1", // Example alias
    "^@shared/(.*)$": "<rootDir>/app/_shared/$1", // Example alias
    "^@dashboard/(.*)$": "<rootDir>/app/(dashboard)/$1", // Example alias
    "^@/(.*)$": "<rootDir>/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
