module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@react-navigation|react-redux|@reduxjs/toolkit|react-native-safe-area-context|react-native-vector-icons|@react-native-picker|react-native-responsive-screen|react-native-webview|react-native-svg|react-native-date-picker|react-native-element-dropdown|react-native-modal-dropdown|@react-navigation/native-stack|@react-navigation/bottom-tabs|@react-navigation/elements|react-native-config|airtable)/)',
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
    '\\.(png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
