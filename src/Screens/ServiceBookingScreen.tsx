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
  Image,
} from 'react-native';
import HeaderComponent from '../../src/components/HeaderComponent';
import Dropdown from '../../src/components/Dropdown';
import { services, shifts } from '../../src/data/Data';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from '../assets/image/TabIcon/calendar.png';
import TextArea from '../components/TextArea';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import countryLogo from '../assets/image/header/right.png'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Button = ({ children, style, textStyle, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={['#047857', '#15803d', '#65a30d']} // emerald gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button1, style]}
      >
        <Text style={[styles.text, textStyle]}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const ServiceBookingScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  // const [selectedPriority, setSelectedPriority] = useState('');
  // const [selectedBudget, setSelectedBudget] = useState('');
  // const [selectedArea, setSelectedArea] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      name.trim() &&
      number.trim() &&
      selectedService &&
      selectedShift &&
      location.trim() &&
      date
    ) {
      navigation.navigate('AdminOtp', {
        name,
        number,
        selectedService,
        selectedShift,
        location,
        message,
        date: date.toISOString(),
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
            placeholder="Enter Your Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />

          <Text style={styles.label}>Phone Number</Text>
          <Image
            source={countryLogo}
            style={styles.icon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Enter Your Phone Number"
            value={number}
            onChangeText={value => setNumber(value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={styles.inputPhone}
            placeholderTextColor={'#4B4B4B'}

          />

          <Text style={styles.label}>Select Service<Text style={{ color: 'red' }}>*</Text></Text>
          <Dropdown
            options={services}
            placeholder="Select Services"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedService}
          />

          <Text style={styles.label}>Choose Date</Text>
          <View style={{ marginBottom: height * 0.025, }}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={styles.datePicker}>
              <Text style={[styles.datePickerText, { fontSize: width * 0.035 }]}>
                {date ? date.toDateString() : 'Pick a Date'}
              </Text>
              <Image source={CalenderIcon} style={{ height: 21, width: 21 }} />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="default"
                minimumDate={new Date()}
                onChange={(event, selectedDate) => {
                  if (event.type === 'set' && selectedDate) {
                    setDate(selectedDate);
                  }
                  setShow(Platform.OS === 'ios');
                }}
              />
            )}
          </View>

          <Text style={styles.label}>Your Location</Text>
          <TextInput
            placeholder="Select Your Location"
            value={location}
            onChangeText={setLocation}
            style={styles.input}
            placeholderTextColor={'#4B4B4B'}
          />

          <Text style={styles.label}>Preferred Time<Text style={{ color: 'red' }}>*</Text></Text>
          <Dropdown
            options={shifts}
            placeholder="Choose a shift"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedShift}
            dropdownType="shift"
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

          <Text style={styles.label}>Message</Text>
          <TextArea
            value={message}
            onChangeText={setMessage}
            placeholder=""
            placeholderTextColor="#4B4B4B"
            maxHeight={160}
          />
          {/* Submit Button */}
          <View style={styles.buttonPadding}>
            <Button
              style={styles.button1}
              textStyle={{ color: 'white', textAlign: 'center', }}
              onPress={handleSubmit}
            >
              Submit Booking
            </Button>

          </View>
        </View>




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
    backgroundColor: 'teal'

  },
  title: {
    fontSize: width * 0.06,
    fontWeight: '700',
    marginBottom: height * 0.001,
    paddingTop: 2,
    paddingBottom: 3,
    color: 'white',
    paddingLeft: 8,
  },
  inputGroup: {
    marginTop: height * 0.015,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    maxHeight: '90%',
    elevation: 10,

  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: '500',
    borderColor: '#3CB371',
    textAlignVertical: 'center',
    paddingBottom: 10,

  },
  inputPhone: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.113,
    height: height * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: '500',
    borderColor: '#3CB371',
    textAlignVertical: 'center',
    paddingBottom: 10,

  },
  icon: {
    height: hp('4%'), // Responsive icon height
    width: wp('7.5%'), // Responsive icon width,
    marginLeft: -4,
    position: 'absolute',
    top: 133,
    left: 30,
    zIndex: 2

  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3CB371',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.05,
    justifyContent: 'space-between',
  },
  datePickerText: {
    fontSize: width * 0.035,
    fontWeight: '500',
    color: '#4B4B4B'
  },
  label: {
    marginBottom: 5,
    paddingLeft: 4,
    fontSize: 15,
    fontWeight: "500",

  },
  buttonPadding: {
    paddingBottom: 41,
    alignItems: 'center',
    color: '#fff'
  },
  button1: {
    width: width * 0.45,
    height:height *0.06,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    paddingVertical: 8,
    borderRadius: 10,
    marginTop:40
  },
  text: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});

export default ServiceBookingScreen;
