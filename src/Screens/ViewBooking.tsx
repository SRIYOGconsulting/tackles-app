import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../src/components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import DropIcon from '../assets/icons/contact/DropDown.svg';
import {fetchBookings} from '../api/PostApi'; // adjust path as needed

// Get screen dimensions
const {width, height} = Dimensions.get('window');
type BookingEntry = {
  id: string;
  Name?: string;
  Phone?: string;
  Service?: string;
  Area?: string;
  Budget?: string;
  Priority?: string;
  Shift?: string;
  Message?: string;
  Date?: string;
};

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const ViewBooking = ({navigation}: {navigation: any}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState<BookingEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBookings();
        setEntries(data);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredEntries = entries.filter(item =>
    item.Service?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent
        style={{
          paddingHorizontal: '5%',
          borderBottomWidth: 1,
          borderColor: '#CAD2DF',
        }}
      />

      <View style={{paddingHorizontal: '5%', paddingTop: '5%', flex: 1}}>
        <Text style={styles.title}>Booking History</Text>

        {/* 🔍 Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#aaa" style={{marginRight: 8}} />
          <TextInput
            placeholder="Search service..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <FlatList
          style={{flex: 1}} // allow it to grow
          contentContainerStyle={{paddingBottom: 40}} // space at bottom
          data={filteredEntries}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: scaleFont(16),
              }}>
              No results found
            </Text>
          }
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.bookingItem}
              onPress={() =>
                navigation.navigate('SingleBooking', {entry: item})
              }>
              <Text style={styles.bookingIndex}>{index + 1}</Text>
              <View style={styles.bookingDetails}>
                <Text style={styles.bookingText}>{item.Service}</Text>
                <Text style={[styles.bookingText, {paddingBottom: 10}]}>
                  {item.Area}
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.bookingDate}>{item.Date}</Text>

                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Action</Text>
                  <DropIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    marginBottom: scaleFont(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: scaleFont(20),
    height: scaleFont(40),
  },
  searchInput: {
    fontSize: scaleFont(16),
    color: '#000',
  },
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleFont(15),
  },
  bookingIndex: {
    fontSize: scaleFont(18),
    fontWeight: '500',
  },
  bookingDetails: {
    flex: 1,
    justifyContent: 'space-between',

    marginLeft: 15,
  },
  bookingText: {
    fontSize: scaleFont(18),
    fontWeight: '400',
  },
  bookingDate: {
    fontSize: scaleFont(18),
    fontWeight: '400',
    marginBottom: scaleFont(6),
  },
  actionButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0E61CD',
    width: scaleFont(118),
    height: scaleFont(34),
    justifyContent: 'space-between',
    paddingHorizontal: scaleFont(10),
    alignItems: 'center',
    borderRadius: 4,
  },
  actionText: {
    fontSize: scaleFont(18),
    fontWeight: '500',
  },
});

export default ViewBooking;
