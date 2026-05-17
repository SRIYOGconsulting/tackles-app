import React, { useState,useEffect , useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

import DropIconAdd from '../assets/icons/contact/add.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  options: string[];
  placeholder: string;
  placeholderColor?: string;
  showRequired?: boolean;
  onSelectOption?: (options: string[]) => void;
  dropdownType?: string;
  borderColor?: string;
   value?: string[]; 
};

const DropdownAdd = ({
  options,
  placeholder,
  placeholderColor = '#4B4B4B',
  showRequired = false,
  onSelectOption,
  dropdownType,
  borderColor,
  value,
}: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // MULTIPLE SELECTED ITEMS
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Dropdown position
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    width: 0,
  });

  const containerRef = useRef<View>(null);

  const toggleDropdown = () => {
    if (!showDropdown) {
      containerRef.current?.measure((x, y, w, h, px, py) => {
        setCoords({
          x: px,
          y: py + h,
          width: w,
        });

        setShowDropdown(true);
      });
    } else {
      setShowDropdown(false);
    }
  };

  // ADD ITEM
  const handleSelectOption = (option: string) => {
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions, option];

      setSelectedOptions(updatedOptions);

      onSelectOption?.(updatedOptions);
    }
  };

  // REMOVE ITEM
  const handleRemoveOption = (option: string) => {
    const updatedOptions = selectedOptions.filter(
      item => item !== option,
    );

    setSelectedOptions(updatedOptions);

    onSelectOption?.(updatedOptions);
  };

  const getDropIcon = () => {
    if (dropdownType === 'shift') {
      return require('../assets/image/TabIcon/clock.png');
    }

    return DropIconAdd;
  };

  useEffect(() => {
  setSelectedOptions(value || []);
}, [value]);

  return (
    <View ref={containerRef} style={styles.container}>
      {/* INPUT */}
      <TouchableOpacity
        style={[
          styles.inputContainer,
          {
            borderColor: borderColor || '#000',
          },
        ]}
        activeOpacity={0.8}
        onPress={toggleDropdown}
      >
        {/* PLACEHOLDER */}
        {selectedOptions.length === 0 && (
          <View style={styles.placeholderWrapper}>
            <Text
              style={[
                styles.placeholder,
                { color: placeholderColor },
              ]}
            >
              {placeholder}
            </Text>

            {showRequired && (
              <Text style={styles.required}>*</Text>
            )}
          </View>
        )}

        {/* SELECTED TAGS */}
        <View style={styles.tagsWrapper}>
          {selectedOptions.map((item, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>

              <TouchableOpacity
                onPress={() => handleRemoveOption(item)}
              >
                <Text style={styles.removeText}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* DROPDOWN ICON */}
        <View style={styles.iconContainer}>
          <Image
            source={getDropIcon()}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      {/* DROPDOWN MODAL */}
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
                top: coords.y - 5,
                left: coords.x,
                width: coords.width,
                maxHeight: hp('26.8%'),
              },
            ]}
          >
            <ScrollView
              bounces={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
            >
              {options.map((item, index) => {
                const isSelected =
                  selectedOptions.includes(item);

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelectOption(item)}
                    style={[
                      styles.optionContainer,
                      isSelected && styles.selectedOption,
                    ]}
                  >
                    <Text
                      style={[
                        styles.option,
                        isSelected && styles.selectedOptionText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
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
    minHeight: hp('5%'),
    backgroundColor: '#fff',
    paddingVertical: hp('0.8%'),
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: hp('2.5%'),
    height: hp('2.5%'),
  },

  placeholderWrapper: {
    position: 'absolute',
    left: wp('3%'),
    flexDirection: 'row',
  },

  placeholder: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
  },

  required: {
    color: 'red',
    marginLeft: 2,
  },

  tagsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.6%'),
    borderRadius: 20,
    marginVertical: 3,
    marginRight: 5,
  },

  tagText: {
    color: '#333',
    fontSize: wp('3.2%'),
    marginRight: 6,
  },

  removeText: {
    color: '#FF3B30',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
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
    shadowOffset: {
      width: 0,
      height: 4,
    },

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

  selectedOption: {
    backgroundColor: '#F1F5FF',
  },

  selectedOptionText: {
    color: '#2F6BFF',
    fontWeight: '600',
  },
});

export default DropdownAdd;