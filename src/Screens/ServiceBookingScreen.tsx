import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  ScrollView, // Added ScrollView
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Dropdown from '../components/Dropdown';
import {area, budget, priority, services, shifts} from '../data/Data';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropIcon from '../assets/icons/contact/DropDown.svg';

const {width, height} = Dimensions.get('window');

const ServiceBookingScreen = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
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
      selectedPriority &&
      selectedBudget &&
      selectedArea &&
      date
    ) {
      navigation.navigate('AdminOtp', {
        name,
        number,
        selectedService,
        selectedShift,
        selectedArea,
        selectedBudget,
        selectedPriority,
        message,
        date: new Date().toISOString(),
      });
    } else {
      Alert.alert('Incomplete Form', 'Please fill in all required fields.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <HeaderComponent style={styles.header} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Professional & Reliable Services</Text>
        <Text style={styles.subTitle}>Request Services</Text>

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

          <View style={{marginBottom: height * 0.015}}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={styles.datePicker}>
              <Text style={{color: '#4B4B4B', fontSize: width * 0.04}}>
                {date ? date.toDateString() : 'Select Date'}
              </Text>
              <DropIcon height={16} width={16} />
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
          <Dropdown
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
          />

          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            style={styles.textArea}
            editable
            multiline
            placeholderTextColor={'#4B4B4B'}
          />
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1, // Ensures the container expands to take full height
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  formContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: '700',
    marginBottom: height * 0.001,
  },
  subTitle: {
    fontSize: width * 0.05,
    fontWeight: '500',
    marginBottom: height * 0.02,
  },
  inputGroup: {
    marginTop: height * 0.0,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
    marginBottom: height * 0.018,
    fontSize: width * 0.04,
    fontWeight: '500',
    borderColor: '#E3E3E3',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    height: height * 0.05,
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  textArea: {
    height: height * 0.13,
    borderWidth: 1,
    padding: width * 0.03,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    fontSize: width * 0.04,
    fontWeight: '500',
    marginTop: height * 0.005,
    paddingBottom: height * 0.08,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: '#0E61CD',
    borderRadius: 4,
    height: height * 0.06,
    width: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: width * 0.045,
    fontWeight: '700',
  },
});

export default ServiceBookingScreen;
