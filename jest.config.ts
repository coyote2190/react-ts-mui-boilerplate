const config = {
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  coverageDirectory: '../.reports',
  coveragePathIgnorePatterns: ['.d.ts', '.mock.ts', 'types', '.container.tsx', '.stories.tsx'],
  coverageReporters: ['text', 'text-summary', 'cobertura', 'html'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['<rootDir>/src/'],
  testPathIgnorePatterns: ['/node_modules/', '/src/__tests__/'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileTransformer.js',
  },
  reporters: ['default'],
  rootDir: 'src',
  setupFiles: ['<rootDir>/__tests__/setupTest.ts'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jestSetup.ts'],
  moduleNameMapper: {
    '@mui/styled-engine': '@mui/styled-engine-sc',
    'react-markdown': '<rootDir>/__tests__/mocks/react-markdown.js',
  },
};

export default config;
