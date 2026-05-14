import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

import DropIcon from '../assets/icons/contact/DropDown.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  options: string[];
  placeholder: string;
  placeholderColor?: string;
  showRequired?: boolean;
  onSelectOption: (option: string) => void;
  dropdownType?: string;
  borderColor?: string;
};

const Dropdown = ({
  options,
  placeholder,
  placeholderColor = '#4B4B4B',
  showRequired = false,
  onSelectOption,
  dropdownType,
  borderColor,
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
        style={[
          styles.inputContainer,
          { borderColor: borderColor || '#000' } // 👈 override here
        ]}
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
          style={{ width: hp('2.5%'), height: hp('2.5%') }}
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
                maxHeight: hp('25%'),
              },
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
    marginBottom: hp('2.5%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: wp('2%'),
    height: hp('5%'),
    backgroundColor: '#fff',
  },
  placeholderWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: wp('3%'),
  },
  placeholder: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
  },
  input: {
    flex: 1,
    color: '#4B4B4B',
    fontSize: wp('3.5%'),
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
    paddingVertical: hp('1.4%'),
    paddingHorizontal: wp('3%'),
    fontSize: hp('1.7%'),
    color: '#333',
  },
  required: {
    color: 'red',
    marginLeft: 2,
  },
});

export default Dropdown;
