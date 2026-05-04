import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../src/components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import DropIcon from '../assets/icons/contact/DropDown.png';
import {fetchBookings} from '../api/PostApi'; // adjust path as needed

// Get screen dimensions
const {width} = Dimensions.get('window');
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const filteredEntries = entries.filter(item =>
    item.Service?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />

      <View style={styles.content}>
        <Text style={styles.title}>Booking History</Text>

        {/* 🔍 Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            placeholder="Search service..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          data={filteredEntries}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
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
                <Text style={styles.bookingAreaText}>
                  {item.Area}
                </Text>
              </View>
              <View style={styles.bookingEnd}>
                <Text style={styles.bookingDate}>{item.Date}</Text>

                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Action</Text>
                  <DropIcon height={20} width={20} />
                   <Image source={DropIcon} style={{width:20, height:20}} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  content: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
    flex: 1,
  },
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
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    fontSize: scaleFont(16),
    color: '#000',
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 40,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: scaleFont(16),
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
  bookingAreaText: {
    fontSize: scaleFont(18),
    fontWeight: '400',
    paddingBottom: 10,
  },
  bookingEnd: {
    alignItems: 'flex-end',
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
