import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderComponent from '../../../src/components/HeaderComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {addFormData} from '../../redux/slice/formSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {createBooking} from '../../api/PostApi';

const {width, height} = Dimensions.get('window'); // Get screen dimensions

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const AdminOtp = ({route}: {route: any}) => {
  const [otp, setOtp] = useState(['', '', '', '']); // Manage OTP state
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const {
    name,
    number,
    selectedArea,
    selectedService,
    selectedBudget,
    selectedPriority,
    selectedShift,
    date,
    message,
  } = route.params;
  const navigation = useNavigation<any>();
  const dispatch: AppDispatch = useDispatch();

  // Clear OTP whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setOtp(['', '', '', '', '']); // Reset OTP on screen focus
    }, []),
  );

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input box if the user types a number
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    // Handle backspace to move focus to the previous box
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleNavigate = async () => {
    const enteredOtp = otp.join(''); // Combine the OTP into a single string
    if (enteredOtp === '11111') {
      const newEntry = {
        id: Date.now(), // Use timestamp as unique ID
        name,
        number,
        selectedService,
        selectedShift,
        selectedPriority,
        selectedBudget,
        selectedArea,
        message,
        date: date instanceof Date ? date.toISOString() : date,
      };
      {
        const booking = {
          Name: name,
          Phone: number,
          Service: selectedService,
          Area: selectedArea,
          Priority: selectedPriority,
          Shift: selectedShift,
          Message: message,
          Budget: selectedBudget,
          Date: date instanceof Date ? date.toISOString() : date,

          // You can also store date if you added that field to Airtable
        };

        try {
          await createBooking(booking);

          dispatch(addFormData(newEntry));
          navigation.navigate('AdminOtpVerify');
        } catch (error) {
          Alert.alert('Error', 'Submission failed. Please try again.');
        }
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />

      <View style={styles.container}>
        <Text style={styles.thankYouText}>
          Thank you! Your booking is confirmed — details have been sent to you.
        </Text>

        <Text style={styles.bookingText}>
          Booking request received. Awaiting confirmation!
        </Text>

        <Text style={styles.otpPromptText}>Enter your OTP to continue.</Text>

        <View style={styles.otpBox}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={otp[index]}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={event => handleKeyPress(event, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleNavigate}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: height * 0.025, // Adjust top padding based on screen size
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: scaleFont(22),
  },
  bookingText: {
    width: '70%',
    textAlign: 'center',
    marginBottom: height * 0.08, // Adjust margin-bottom based on screen height
    fontSize: scaleFont(20),
    marginTop: height * 0.12, // Adjust top margin for large screens
    fontWeight: '500',
  },
  otpPromptText: {
    fontSize: scaleFont(20),
    marginBottom: height * 0.04, // Adjust margin-bottom for larger screens
    fontWeight: '500',
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: width * 0.12, // Dynamic width for better scalability
    height: width * 0.12, // Dynamic height to maintain square shape
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: scaleFont(18),
    backgroundColor: '#fff',
  },
  submitButton: {
    borderColor: '#0E61CD',
    height: 48,
    width: width * 0.35, // Adjust width based on screen size
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: height * 0.15, // Dynamic margin-top for large screens
    borderWidth: 1,
  },
  submitButtonText: {
    fontSize: scaleFont(22),
    color: '#000',
    fontWeight: '700',
  },
});

export default AdminOtp;
