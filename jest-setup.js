/* eslint-disable no-undef */
jest.mock('react-native-config', () => ({
  AIRTABLE_API_KEY: 'test-key',
  AIRTABLE_BASE_ID: 'test-base',
  AIRTABLE_TABLE_NAME: 'test-table',
}));
