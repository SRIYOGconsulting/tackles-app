import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {faqsQuestioin, questions} from '../data/Data';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const filteredData = faqsQuestioin
    .map(item => item.category) // Extract titles only
    .filter(category =>
      category.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="search" size={20} color="gray" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#23232399"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {searchText ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          style={styles.overlayList} // Custom style to overlay content
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#E2E2E27A',
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 10,
    height: 40,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  overlayList: {
    position: 'absolute', // Overlay the list
    top: 25, // Position it below the search bar
    left: 60,
    right: 0,

    backgroundColor: 'white', // Add background to prevent transparency
    borderWidth: 1,
    borderColor: '#ccc',

    zIndex: 1, // Ensure it appears above other content
    maxHeight: 230, // Add a limit to the height for better usability
    width: '40%',
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    textAlign: 'center',
  },
});

export default SearchBar;
