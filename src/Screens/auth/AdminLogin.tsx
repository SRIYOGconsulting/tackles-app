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
  Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import EmailIcon from '../../assets/icons/Email.png';
import EyeOffIcon from '../../assets/icons/EyeOff.png';
import EyeOnIcon from '../../assets/icons/EyeOn.png';

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
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    if (password && email === 'admin') {
      navigation.navigate('ViewBooking');
    } else {
      Alert.alert('Wrong Email or Password');
    }
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

          <View style={styles.formContainer}>
            <Image
              source={require('../../assets/icons/admin/admin.png')}
              style={styles.image}
            />
            <Text style={styles.welcomeText}>Welcome, Admin.</Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={'#434343'}
                style={styles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Image source={EmailIcon} style={{ width: 19, height: 12}} />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#434343'}
                secureTextEntry={!passwordVisible}
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {passwordVisible ? (
                  <Image source={EyeOnIcon} style={{ width: 22, height: 22 }} />

                ) : (
                  <Image source={EyeOffIcon} style={{ width: 22, height: 22 }} />
                )}
              </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <TouchableOpacity>
                <Text style={styles.btnText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btnText}>Create new account</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('AdminChangePasswordScreen');
              }}>
                <Text style={styles.btnText}>Change Password</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'center',
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
  btnContainer: {

  },
  btnText: {
    color: '#333',
    fontWeight: '500',
    textDecorationLine:'underline',
    marginBottom:hp('0.3%')
  },

  formContainer: {
    paddingHorizontal: '6%',
    width: '90%',
    alignItems: 'center',

    paddingVertical: hp('3%'),
    backgroundColor:'#fff'

  },
  image: {
    width: wp('40%'),
    height: hp('20%'),
    resizeMode: 'contain',
    borderRadius:200
  },
  welcomeText: {
    fontSize: scaleFont(24),
    fontWeight: '700',
    marginTop: height * 0.04, // Margin adjusted based on screen height
    marginBottom: height * 0.03, // Margin adjusted based on screen height
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderWidth: 1,
    width: '100%',
    marginBottom: '5%',
    borderRadius: 8,
    borderColor: '#000',
    alignItems: 'center',
      height: hp('5.5%'),
  },
  textInput: {
    fontSize: scaleFont(16),
    fontWeight: '500',
    flex: 1,
  },
  loginButton: {
    marginTop: height * 0.04, // Adjusted button margin based on screen height
    marginBottom: hp('3%'),
    height: height * 0.055,
    width: width * 0.35, // Adjust width based on screen size
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue'
  },
  loginButtonText: {
    fontSize: scaleFont(20),
    fontWeight: '600',
    color:'#fff'
  },
});

export default AdminLogin;
