import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import DropIcon from '../assets/icons/contact/DropDown.png';

const {width, height} = Dimensions.get('window');

const Dropdown = ({
  options,
  placeholder,
  placeholderColor = '#4B4B4B',
  showRequired = false,
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
    onSelectOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {selectedOption === '' && (
          <Text style={[styles.placeholder, {color: placeholderColor}]}>
            {placeholder}
            {showRequired && <Text style={styles.required}>*</Text>}
          </Text>
        )}
        <TextInput
          style={styles.input}
          value={selectedOption}
          editable={false}
          pointerEvents="none"
        />
        <TouchableOpacity onPress={toggleDropdown}>
          <Image source={DropIcon} style={{width:height* 0.025, height:height* 0.025}}/>
        </TouchableOpacity>
      </View>

      {showDropdown && (
        <View style={[styles.dropdown, styles.dropdownDynamic]}>
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
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
    position: 'relative',
    backgroundColor: '#fff',
  },
  placeholder: {
    position: 'absolute',
    left: width * 0.03,
    fontSize: height * 0.018,
    color: '#4B4B4B',
  },
  input: {
    flex: 1,
    fontSize: height * 0.018,
    color: '#000',
    paddingVertical: height * 0.005,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    marginTop: 5,
  },
  option: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    fontSize: height * 0.018,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#333',
  },
  container: {
    marginBottom: height * 0.015,
  },
  required: {
    color: 'red',
  },
  dropdownDynamic: {
    maxHeight: height * 0.3,
    top: Platform.OS === 'ios' ? height * 0.06 : height * 0.055,
  },
});

export default Dropdown;
