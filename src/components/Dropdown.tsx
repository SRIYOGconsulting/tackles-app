import React, { useState, useRef } from 'react';
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
  Modal,
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
  
  // States to track where to draw the dropdown
  const [coords, setCoords] = useState({ x: 0, y: 0, width: 0 });
  const containerRef = useRef<View>(null);

  const toggleDropdown = () => {
    if (!showDropdown) {
      containerRef.current?.measure((x, y, w, h, px, py) => {
        setCoords({ x: px, y: py + h, width: w });
        setShowDropdown(true);
      });
    } else {
      setShowDropdown(false);
    }
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
    <View ref={containerRef} style={styles.container}>
      <TouchableOpacity 
        style={styles.inputContainer} 
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        {selectedOption === '' && (
          <View style={styles.placeholderWrapper}>
            <Text style={[styles.placeholder, { color: placeholderColor }]}>
              {placeholder}
            </Text>
            {showRequired && <Text style={styles.required}>*</Text>}
          </View>
        )}

        <TextInput
          style={styles.input}
          value={selectedOption}
          editable={false}
          pointerEvents="none"
        />

        {/* LOGO RESTORED HERE */}
        <Image
          source={getDropIcon()}
          style={{ width: height * 0.025, height: height * 0.025 }}
        />
      </TouchableOpacity>

      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="none"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowDropdown(false)}
        >
          <View 
            style={[
              styles.dropdown, 
              { 
                top: coords.y + 5, // 5px gap below input
                left: coords.x, 
                width: coords.width,
                maxHeight: height * 0.25 
              }
            ]}
          >
            <ScrollView 
              bounces={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
            >
              {options.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => handleSelectOption(item)}
                  style={styles.optionContainer}
                >
                  <Text style={styles.option}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: height * 0.025,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3CB371',
    borderRadius: 10,
    paddingHorizontal: width * 0.02,
    height: height * 0.05,
    backgroundColor: '#fff',
  },
  placeholderWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: width * 0.03,
  },
  placeholder: {
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    color: '#4B4B4B',
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  optionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  option: {
    paddingVertical: height * 0.014,
    paddingHorizontal: width * 0.03,
    fontSize: height * 0.017,
    color: '#333',
  },
  required: {
    color: 'red',
    marginLeft: 2,
  },
});

export default Dropdown;