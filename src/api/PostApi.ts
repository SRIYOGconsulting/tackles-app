import Airtable from 'airtable';
import Config from 'react-native-config';

const apiKey = Config.AIRTABLE_API_KEY;
const baseId = Config.AIRTABLE_BASE_ID;
const tableName = Config.AIRTABLE_TABLE_NAME;

if (!apiKey || !baseId || !tableName) {
  throw new Error('Missing Airtable configuration. Check your .env file.');
}

const base = new Airtable({apiKey}).base(baseId);

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
  try {
    const record = await base(tableName).create([{fields: booking}]);
    return record;
  } catch (error) {
    console.error('Error creating Airtable record:', error);
    throw error;
  }
};

export const fetchBookings = async () => {
  try {
    const records = await base(tableName).select().all();

    return records.map(record => ({
      id: record.id,
      ...record.fields,
    }));
  } catch (error) {
    console.error('Error fetching Airtable records:', error);
    throw error;
  }
};
