import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import DropIcon from '../assets/icons/contact/DropDown.svg';

// Get screen dimensions
const {width, height} = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const ViewBooking = ({navigation}: {navigation: any}) => {
  const entries = useSelector((state: RootState) => state.form.entries);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = entries.filter(item =>
    item.selectedService.toLowerCase().includes(searchTerm.toLowerCase()),
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

      <View style={{paddingHorizontal: '4%', paddingTop: '5%'}}>
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
                <Text style={styles.bookingText}>{item.selectedService}</Text>
                <Text style={[styles.bookingText, {paddingBottom: 10}]}>
                  {item.selectedArea}
                </Text>
              </View>
              <View>
                <Text style={styles.bookingDate}>
                  {item.date
                    ? new Date(item.date).toDateString()
                    : 'No date available'}
                </Text>
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
    flex: 1,
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
    width: '54%',
    justifyContent: 'space-between',
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
