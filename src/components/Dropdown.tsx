import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import DropIcon from '../assets/icons/contact/DropDown.png';

const { width, height } = Dimensions.get('window');

type Props = {
  options: string[];
  placeholder: string;
  placeholderColor?: string;
  showRequired?: boolean;
  onSelectOption: (option: string) => void;
  dropdownType?: string;
};

const Dropdown = ({
  options,
  placeholder,
  placeholderColor = '#4B4B4B',
  showRequired = false,
  onSelectOption,
  dropdownType,
}: Props) => {
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

  const getDropIcon = () => {
    if (dropdownType === 'shift') {
      return require('../assets/image/TabIcon/clock.png');
    }

    return DropIcon;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {selectedOption === '' && (
          <Text style={[styles.placeholder, { color: placeholderColor }]}>
            {placeholder}
            {showRequired && <Text style={styles.required}>*</Text>}
          </Text>
        )}

        <TextInput
          style={styles.input}
          value={selectedOption}
          editable={false}
        />

        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={getDropIcon()}
            style={{ width: height * 0.025, height: height * 0.025 }}
          />
        </TouchableOpacity>
      </View>

      {showDropdown && (
        <View style={[styles.dropdown, styles.dropdownDynamic]}>
          <ScrollView keyboardShouldPersistTaps="handled">
            {options.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectOption(item)}>
                <Text style={styles.option}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    borderColor: 'lightgreen',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.05,
    position: 'relative',
    backgroundColor: '#fff',
  },
  placeholder: {
    position: 'absolute',
    left: width * 0.03,
    color: '#4B4B4B',
    fontSize: width * 0.035,
    fontWeight: '500',
    paddingBottom: 2
  },
  input: {
    flex: 1,
    color: '#4B4B4B',
    paddingHorizontal: 1,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    marginTop: 5,
    elevation: 10,
  },
  option: {
    paddingVertical: height * 0.014,
    paddingHorizontal: width * 0.03,
    fontSize: height * 0.017,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#333',
  },
  container: {
    marginBottom: height * 0.025,
  },
  required: {
    color: 'red',
  },
  dropdownDynamic: {
    maxHeight: height * 0.27,
    top: Platform.OS === 'ios' ? height * 0.06 : height * 0.055,
  },
});

export default Dropdown;
