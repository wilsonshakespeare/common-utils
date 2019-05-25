// '<rootDir>/node_modules/'
/*/
"transformIgnorePatterns": [
  "node_modules/(?!(react-native|my-project|redux-persist)/)"
]
/*/

module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/__test__/helpers/intl-enzyme-test-helper.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/?!(react-icons)',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(react-icons)/)',
  ],
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg)$': 'identity-obj-proxy',
  },
};
