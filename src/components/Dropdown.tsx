import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import DropIcon from '../assets/icons/contact/DropDown.svg';

const {height} = Dimensions.get('window'); // Get the height of the screen

const Dropdown = ({
  options,
  placeholder,
  placeholderColor = '#4B4B4B',

  showRequired = false, // Controls whether the red * is shown
  onSelectOption,
}: {
  options: Array<string>;
  placeholder: string;
  placeholderColor?: string;

  showRequired?: boolean;
  onSelectOption: (option: string) => void;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
    onSelectOption(option); // Callback function
  };

  return (
    <View style={{marginBottom: 10}}>
      <View style={styles.inputContainer}>
        {/* Conditional Placeholder */}
        {selectedOption === '' && (
          <Text style={[styles.placeholder, {color: placeholderColor}]}>
            {placeholder}
            {showRequired && <Text style={{color: 'red'}}> *</Text>}
          </Text>
        )}
        <TextInput
          style={styles.input}
          value={selectedOption} // Display the selected option text here
          editable={false} // Prevent manual text input
        />

        <TouchableOpacity onPress={toggleDropdown}>
          <DropIcon height={16} width={16} />
        </TouchableOpacity>
      </View>
      {showDropdown && (
        <View
          style={[
            styles.dropdown,
            {
              maxHeight: height / 3, // Set max height for the dropdown list
              top: 45, // Adjust dropdown position
            },
          ]}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelectOption(item)}>
                <Text style={styles.option}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 34,
    position: 'relative',
  },
  placeholder: {},
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
  icon: {
    marginLeft: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Dropdown;
