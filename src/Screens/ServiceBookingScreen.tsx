import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';
import HeaderComponent from '../../src/components/HeaderComponent';
import Dropdown from '../../src/components/Dropdown';
import { area, services, shifts } from '../../src/data/Data';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropIcon from '../assets/icons/contact/DropDown.svg';
import TextArea from '../components/TextArea';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('window');

const ServiceBookingScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  // const [selectedPriority, setSelectedPriority] = useState('');
  // const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      name &&
      number &&
      selectedService &&
      selectedShift &&
      // selectedPriority &&
      // selectedBudget &&
      selectedArea &&
      date
    ) {
      navigation.navigate('AdminOtp', {
        name,
        number,
        selectedService,
        selectedShift,
        selectedArea,
        // selectedBudget,
        // selectedPriority,
        message,
        date: new Date().toISOString(),
      });
    } else {
      Alert.alert('Incomplete Form', 'Please fill in all required fields.');
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <HeaderComponent style={styles.header} />
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Professional & Reliable Services</Text>
        <Text style={styles.subTitle}>Request a Services</Text>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />
          <TextInput
            placeholder="Phone Number"
            value={number}
            onChangeText={value => setNumber(value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />

          <Dropdown
            options={services}
            placeholder="Select Services"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedService}
            showRequired
          />

          <View style={{ marginBottom: height * 0.025, }}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={styles.datePicker}>
              <Text style={[styles.datePickerText, { fontSize: width * 0.04 }]}>
                {date ? date.toDateString() : 'Select Date'}
              </Text>
              <DropIcon height={21} width={21} />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  if (event.type === 'set' && selectedDate) {
                    setDate(selectedDate);
                  }
                  setShow(Platform.OS === 'ios');
                }}
              />
            )}
          </View>

          <Dropdown
            options={area}
            placeholder="Select Location"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedArea}
          />
          <Dropdown
            options={shifts}
            placeholder="Select Shift"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedShift}
            showRequired
          />
          {/* <Dropdown
            options={priority}
            placeholder="Select Priority"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedPriority}
            showRequired
          />
          <Dropdown
            options={budget}
            placeholder="Select Budget"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedBudget}
            showRequired
          /> */}

          <TextArea
            value={message}
            onChangeText={setMessage}
            placeholder="Message"
            placeholderTextColor="#4B4B4B"
            maxHeight={160}
          />
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1, // Ensures the container expands to take full height
  },
  header: {
    paddingTop: 20.7
  },
  formContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: width * 0.055,
    fontWeight: '700',
    marginBottom: height * 0.001,
    paddingTop: 2,
    paddingBottom: 3
  },
  subTitle: {
    fontSize: width * 0.043,
    fontWeight: '500',
    marginBottom: height * 0.02,
  },
  inputGroup: {
    marginTop: height * 0.01,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    height: height * 0.045,
    marginBottom: height * 0.025,
    fontSize: width * 0.04,
    fontWeight: '500',
    borderColor: '#E3E3E3',
    textAlignVertical: 'center',
    paddingBottom: 8.5,

  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    height: height * 0.045,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  datePickerText: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#4B4B4B'
  },

  textArea: {
    height: height * 0.10,
    borderWidth: 1,
    paddingLeft: width * 0.035,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    fontSize: width * 0.04,
    fontWeight: '500',
    marginTop: height * 0.001,
    paddingBottom: height * 0.065,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 145,
  },
  submitButton: {
    backgroundColor:'#0E61CD',
    borderRadius: 4,
    height: height * 0.05,
    width: width * 0.28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '700',
  },
});

export default ServiceBookingScreen;
