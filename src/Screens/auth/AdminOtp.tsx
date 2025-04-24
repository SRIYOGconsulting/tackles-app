import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {addFormData} from '../../redux/slice/formSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';

type Props = {};

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
  const handleNavigate = () => {
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
        date: date?.toISOString() || '',
      };

      dispatch(addFormData(newEntry));
      navigation.navigate('AdminOtpVerify');
    } else {
      Alert.alert('Error', 'Wrong OTP! Please try again.');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />

      <View style={styles.container}>
        <Text style={{fontSize: 24}}>
          Thank you! Your booking is confirmed — details have been sent to you.
        </Text>

        <Text
          style={{
            width: '70%',
            textAlign: 'center',
            marginBottom: '14%',
            fontSize: 22,
            marginTop: '30%',
            fontWeight: '500',
          }}>
          Booking request received. Awaiting confirmation!
        </Text>
        <Text style={{fontSize: 20, marginBottom: '10%', fontWeight: '500'}}>
          Enter your OTP to continue.
        </Text>
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
        <TouchableOpacity
          style={{
            borderColor: '#0E61CD',
            height: 48,
            width: 129,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            marginTop: '28%',
            borderWidth: 1,
          }}
          onPress={handleNavigate}>
          <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingTop: '5%',

    alignItems: 'center',
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default AdminOtp;
