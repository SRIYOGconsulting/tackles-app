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
        <Text style={styles.title}>Book a Service</Text>
    

        <View style={styles.inputGroup}>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Phone Number"
            value={number}
            onChangeText={value => setNumber(value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />

          <Text style={styles.label}>Select a Service<Text style={{color:'red'}}>*</Text></Text>
          <Dropdown
            options={services}
            placeholder="Select Services"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedService}
          />

          <Text style={styles.label}>Pick a Date</Text>
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

          <Text style={styles.label}>Select a Location</Text>
          <Dropdown
            options={area}
            placeholder="Select Location"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedArea}
          />

          <Text style={styles.label}>Select Shift<Text style={{color:'red'}}>*</Text></Text>
          <Dropdown
            options={shifts}
            placeholder="Select Shift"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedShift}
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

          <Text style={styles.label}>Requests</Text>
          <TextArea
            value={message}
            onChangeText={setMessage}
            placeholder=""
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
    paddingBottom: 3,
    color:'green'
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
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.045,
    marginBottom: height * 0.025,
    fontSize: width * 0.04,
    fontWeight: '500',
    borderColor: 'lightgreen',
    textAlignVertical: 'center',
    paddingBottom: 8.5,

  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgreen',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.045,
    justifyContent: 'space-between',
  },
  datePickerText: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#4B4B4B'
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
  label:{
    marginBottom:5,
    paddingLeft:4,
    fontSize:14,
    fontWeight:"500"
  }
});

export default ServiceBookingScreen;
