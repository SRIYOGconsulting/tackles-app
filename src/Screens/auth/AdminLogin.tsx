import React, {useState} from 'react';
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

// Get screen dimensions for responsive layout
const {width, height} = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const AdminLogin = ({navigation}: {navigation: any}) => {
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <HeaderComponent style={styles.header} />
        <View style={styles.formContainer}>
          <Image
            source={require('../../assets/image/admin.png')}
            style={styles.image}
          />
          <Text style={styles.welcomeText}>Welcome, Admin.</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="E-mail Address"
              placeholderTextColor={'#434343'}
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Image source={EmailIcon} style={{ width: 30, height: 20 }} />
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
                <Image source={EyeOnIcon} style={{width: 30, height: 30}} />
                
              ) : (
                <Image source={EyeOffIcon} style={{ width:30, height:30}} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  formContainer: {
    paddingHorizontal: '5%',
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.12, // Adjust margin for responsiveness
  },
  image: {
    width: '100%',
    height: height * 0.25, // Adjust image size to screen height
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: scaleFont(24),
    fontWeight: '500',
    marginTop: height * 0.08, // Margin adjusted based on screen height
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
    borderColor: '#4B4B4B',
    alignItems: 'center',
  },
  textInput: {
    fontSize: scaleFont(18),
    fontWeight: '400',
    flex: 1,
  },
  loginButton: {
    marginTop: height * 0.04, // Adjusted button margin based on screen height
    borderWidth: 1,
    height: height * 0.06,
    width: width * 0.35, // Adjust width based on screen size
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0E61CD',
  },
  loginButtonText: {
    fontSize: scaleFont(22),
    fontWeight: '600',
  },
});

export default AdminLogin;
