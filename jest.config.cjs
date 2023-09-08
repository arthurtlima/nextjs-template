module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.ts(x)?',
      '!src/pages/**', // should be tested in e2e
      '!src/**/stories.tsx',
      '!src/styles/**'
    ],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
    }
}