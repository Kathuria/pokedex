 // Code generated via "Slingshot" 
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '\\.stories\\.(js|jsx|ts|tsx)$', // Ignore all .stories files
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, TSX files in src
    '!src/**/*.stories.{js,jsx,ts,tsx}', // Exclude all .stories files from coverage
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
    '!src/index.ts', // Exclude entry point
  ],
};
