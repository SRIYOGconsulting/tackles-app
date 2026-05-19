import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import PhoneIcon from '../../assets/icons/admin/phone.png';
import EyeOffIcon from '../../assets/icons/admin/eyeOff.png';
import EyeOnIcon from '../../assets/icons/admin/eyeOn.png';
import KeyIcon from '../../assets/icons/admin/key.png'

import CustomCheckbox from '../../components/admin/CustomCheckbox';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Get screen dimensions for responsive layout
const { width, height } = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const AdminLogin = ({ navigation }: { navigation: any }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setphoneNumber] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
   navigation.navigate('BookingHistoryScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent style={styles.header} />

      <View style={styles.divider} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Hello!, Admin</Text>
          <Text style={styles.subtitle}>Welcome to TACKLES...</Text>
          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>Login</Text>

            <View style={styles.inputContainer}>
              <Image source={PhoneIcon} style={{ width: 30, height: 30, tintColor: '#000' }} />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={'rgba(67, 67, 67,0.6)'}
                style={styles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
                value={phoneNumber}
                onChangeText={setphoneNumber}
              />

            </View>

            <View style={styles.inputContainer}>
              <Image source={KeyIcon} style={{ width: 30, height: 30, tintColor: '#000' }} />
              <TextInput
                placeholder="PIN"
                placeholderTextColor={'rgba(67, 67, 67,0.6)'}
                secureTextEntry={!passwordVisible}
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {passwordVisible ? (
                  <Image source={EyeOnIcon} style={{ width: 23, height: 27, tintColor: 'hsl(0, 0%, 30%)' }} />

                ) : (
                  <Image source={EyeOffIcon} style={{ width: 22, height: 22, tintColor: 'hsl(0, 0%, 30%)' }} />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.btnContainerFlex}>
              <TouchableOpacity>

                <CustomCheckbox />

              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btnText}>Forgot Password?</Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.loginDivider} />

            <Text style={styles.btnTextBelow}>Become a member : <Text style={{ fontWeight: '900',color:'black' }}>
              Join Now
            </Text></Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('AdminChangePasswordScreen');
            }}>
              <Text style={styles.btnTextBelow}>Change Password</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp('2%'),
  },
  header: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('4%'),
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginTop: 16,
  },
  title: {
    fontSize: scaleFont(22),
    fontWeight: '900',
    marginTop: height * 0.01, // Margin adjusted based on screen height
    width: '100%',
    color: 'green',
    paddingLeft: hp('3%')

  },
  subtitle: {
    width: '100%',
    marginTop: height * 0.013,
    fontSize: hp('1.63%'),
    paddingLeft: hp('3%'),
    fontWeight: '500',
    color: 'hsl(0, 0%, 20%)'
  },
  btnContainerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: hp('1%')
  },
  btnText: {
    color: '#333',
    fontWeight: '500',
    fontSize: hp('1.5%'),
    marginBottom: hp('0.3%')
  },
  btnTextBelow: {
    color: '#333',
    fontWeight: '500',
    fontSize: hp('1.5%')
  },

  formContainer: {
    paddingHorizontal: '10%',
    width: '100%',
    alignItems: 'center',

    paddingVertical: hp('3%'),
    backgroundColor: '#ebffef',
    paddingBottom: hp('6%'),
    marginTop: hp('18%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  image: {
    width: wp('40%'),
    height: hp('20%'),
    resizeMode: 'contain',
    borderRadius: 200
  },
  welcomeText: {
    fontSize: scaleFont(22),
    fontWeight: '900',
    marginTop: height * 0.01, // Margin adjusted based on screen height
    marginBottom: height * 0.04, // Margin adjusted based on screen height
    width: '100%',
    color: 'green',
    paddingHorizontal: hp('1.3%')
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderWidth: 1,
    width: '100%',
    marginBottom: '5%',
    borderRadius: 12,
    borderColor: 'rgba(0, 0, 0,0.1)',
    alignItems: 'center',
    height: hp('6%'),
    backgroundColor: '#fff'
  },
  textInput: {
    fontSize: scaleFont(14),
    fontWeight: '600',
    flex: 1,
    paddingHorizontal: hp('2%'),

  },
  loginButton: {
    marginTop: height * 0.04, // Adjusted button margin based on screen height

    height: height * 0.06,
    width: '95%', // Adjust width based on screen size
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  loginButtonText: {
    fontSize: scaleFont(13),
    fontWeight: '600',
    color: '#fff',
  },
  loginDivider: {
    borderWidth: 1,
    width: '100%',
    borderColor: 'hsl(0, 0%, 33%)',
    marginBottom: hp('2%'),
    marginTop: hp('8%')
  }
});

export default AdminLogin;
