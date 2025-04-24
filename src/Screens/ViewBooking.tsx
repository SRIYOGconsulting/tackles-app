import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import DropIcon from '../assets/icons/contact/DropDown.svg';

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

      <View style={{paddingHorizontal: '5%', paddingTop: '6%'}}>
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
            <Text style={{textAlign: 'center', marginTop: 20, fontSize: 16}}>
              No results found
            </Text>
          }
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              onPress={() =>
                navigation.navigate('SingleBooking', {entry: item})
              }>
              <Text style={{fontSize: 18, fontWeight: '500'}}>{index + 1}</Text>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  {item.selectedService}
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: '500', paddingBottom: 10}}>
                  {item.selectedArea}
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: '500', marginBottom: 6}}>
                  April 15,2025
                </Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#0E61CD',
                    width: 110,
                    height: 34,
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    borderRadius: 4,
                  }}>
                  <Text style={{fontSize: 18, fontWeight: '500'}}>Action</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default ViewBooking;
