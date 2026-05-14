import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import HeaderComponent from '../../../src/components/HeaderComponent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { addFormData } from '../../redux/slice/formSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { createBooking } from '../../api/PostApi';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const AdminOtp = ({ route }: { route: any }) => {
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
    <View style={styles.mainContainer}>
      <HeaderComponent style={styles.header} />
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />

      <View style={styles.container}>
        <Text style={styles.thankYouText}>
          Phone Verification
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

        <Text style={styles.resendcode}><Text style={{color:'blue'}}>Resend Code</Text></Text>

        <TouchableOpacity style={styles.submitButton} onPress={handleNavigate}>
          <Text style={styles.submitButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: height * 0.09, // Adjust top padding based on screen size
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: scaleFont(27),
    fontWeight:'700',
  },
  bookingText: {
    width: '70%',
    textAlign: 'center',
    marginBottom: height * 0.08, // Adjust margin-bottom based on screen height
    fontSize: scaleFont(17),
    marginTop: height * 0.03, // Adjust top margin for large screens
    fontWeight: '500',
    lineHeight:23,
  },
  otpPromptText: {
    fontSize: scaleFont(18.5),
    marginBottom: height * 0.04, // Adjust margin-bottom for larger screens
    fontWeight: '500',
    color:'green',
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    width: width * 0.12, // Dynamic width for better scalability
    height: width * 0.12, // Dynamic height to maintain square shape
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'hsl(0, 0%, 79%)',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: scaleFont(18),
    backgroundColor: '#fff',
    elevation:3,

  },
  resendcode:{
    marginTop:25,
    paddingHorizontal:20,
    textAlign:'center',
    lineHeight:22,
  },
  submitButton: {
    backgroundColor:'green',
    height: 40,
    width: '60%', // Adjust width based on screen size
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: height * 0.08, // Dynamic margin-top for large screens
  },
  submitButtonText: {
    fontSize: scaleFont(17),
    color: '#fff',
    fontWeight: '300',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop:hp('2.0%'),
    paddingHorizontal:15.7,
  },
});

export default AdminOtp;
