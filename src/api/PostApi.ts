import Airtable from 'airtable';
import Config from 'react-native-config';

const apiKey = Config.AIRTABLE_API_KEY;
const baseId = Config.AIRTABLE_BASE_ID;
const tableName = Config.AIRTABLE_TABLE_NAME;

const getBase = () => {
  if (!apiKey || !baseId || !tableName) {
    throw new Error('Missing Airtable configuration. Check your .env file.');
  }

  return {
    base: new Airtable({apiKey}).base(baseId),
    tableName,
  };
};

type Booking = {
  Name: string;
  Phone: string;
  Service: string;
  Area: string;
  Budget: string;
  Priority: string;
  Shift: string;
  Message: string;
  Date: string;
};

export const createBooking = async (booking: Booking) => {
  const {base, tableName: airtableTableName} = getBase();

  try {
    const record = await base(airtableTableName).create([{fields: booking}]);
    return record;
  } catch (error) {
    console.error('Error creating Airtable record:', error);
    throw error;
  }
};

export const fetchBookings = async () => {
  const {base, tableName: airtableTableName} = getBase();

  try {
    const records = await base(airtableTableName).select().all();

    return records.map(record => ({
      id: record.id,
      ...record.fields,
    }));
  } catch (error) {
    console.error('Error fetching Airtable records:', error);
    throw error;
  }
};
