module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    /* Tell Jest how to resolve path aliases with @ for src. */
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
    },
};