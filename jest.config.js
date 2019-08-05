module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testRegex: ['.*\\.test\\.jsx?$', '.*\\.test\\.tsx?$'],
  collectCoverageFrom: ['src/**/*.{js}', 'src/**/*.{ts}', 'src/**/*.{jsx}', 'src/**/*.{tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$':
      'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
