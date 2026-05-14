import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import HeaderComponent from '../../src/components/HeaderComponent';
import Dropdown from '../../src/components/Dropdown';
import { area, services } from '../../src/data/Data';
import TextArea from '../components/TextArea';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import countryLogo from '../assets/image/header/right.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FileUploadBox from '../components/FileUploadBox';
import ClearFormIcon from '../assets/icons/contact/clear.png'


const { width, height } = Dimensions.get('window');

const Button = ({ children, style, textStyle, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={style}
    >
      <Text style={[styles.text, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const PartnerScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  // const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [organizationName, setOrganizationName] = useState('');

  const handleSubmit = () => {
    if (
      name.trim() &&
      number.trim() &&
      selectedService &&
      selectedShift &&
      selectedArea &&
      email &&
      organizationName &&
      message
    ) {
      navigation.navigate('AdminOtp', {
        name,
        number,
        selectedService,
        selectedShift,
        selectedArea,
        message,
        email,
        organizationName,
      });
    } else {
      Alert.alert(
        'Incomplete Form',
        'Please fill in all required fields.'
      );
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
        <Text style={styles.title}>Partnership</Text>
        <Text style={styles.subTitle}>Partnership opportunity with TACKLES</Text>

        <Text style={styles.borderWIDTH} />

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your Full Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Name of Organization</Text>
        <TextInput
          placeholder="Enter the name of your organization"
          value={organizationName}
          onChangeText={setOrganizationName}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneContainer}>
          <Image
            source={countryLogo}
            style={styles.icon}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Enter your Phone Number"
            value={number}
            onChangeText={(value) => {
              // keep only numbers
              let cleaned = value.replace(/[^0-9]/g, '');

              // limit to 10 digits
              cleaned = cleaned.slice(0, 10);

              // format 3-3-4
              let formatted = cleaned;

              if (cleaned.length > 3 && cleaned.length <= 6) {
                formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
              } else if (cleaned.length > 6) {
                formatted =
                  cleaned.slice(0, 3) +
                  ' ' +
                  cleaned.slice(3, 6) +
                  ' ' +
                  cleaned.slice(6);
              }

              setNumber(formatted);
            }}
            keyboardType="number-pad"
            style={styles.phoneInput}
            placeholderTextColor={'#4B4B4B'}
          />
        </View>

        <Text style={styles.label}>eMail</Text>
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Company Photos</Text>
        <FileUploadBox />

        <Text style={styles.label}>City</Text>
        <Dropdown
          options={area}
          placeholder="Select your City"
          placeholderColor="#4B4B4B"
          onSelectOption={setSelectedArea}

        />

        <Text style={styles.label}>Number of Employees</Text>
        <TextInput
          placeholder="Enter the number of employees"
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Business Type</Text>
        <TextInput
          placeholder="Enter the type of your business"
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Services Offered<Text style={{ color: 'red' }}>*</Text></Text>
        <Dropdown
          options={services}
          placeholder="Select the services you offer"
          placeholderColor="#4B4B4B"
          onSelectOption={setSelectedService}
        />

        <Text style={styles.label}>Partnership Interest</Text>
        <TextInput
          placeholder="Briefly describe why you are interested"
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Company Registratiom Certificates</Text>
        <FileUploadBox />

        <Text style={styles.label}>How did you hear about us?</Text>
        <TextInput
          placeholder="Briefly describe how you heard about us"
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />


        <Text style={styles.label}>Message</Text>
        <TextArea
          value={message}
          onChangeText={setMessage}
          placeholder=""
          placeholderTextColor="#4B4B4B"
          maxHeight={160}
        />

        <View style={styles.buttonContainer}>
         
          <Pressable style={styles.buttonClearFlex}>
            <Image source={ClearFormIcon} style={styles.clearIcon} />
             <Text style={styles.buttonClear}>Clear form</Text>
          </Pressable>

          <Button
            style={styles.buttonSubmit}
            textStyle={{ color: 'white', textAlign: 'center' }}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </View>
      </View>

    </KeyboardAwareScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1, // Ensures the container expands to take full height
  },
  header: {
    marginTop: hp('2%'),
    paddingHorizontal: 15.7,
  },
  formContainer: {
    paddingHorizontal: width * 0.08,
    paddingTop: height * 0.02,
    backgroundColor: 'white',

  },
  title: {
    fontSize: width * 0.07,
    fontWeight: '700',
    marginBottom: height * 0.001,
    paddingTop: 2,
    color: '#000',
    paddingLeft: 3,
  },
  subTitle: {
    fontSize: width * 0.035,
    fontWeight: '400',
    color: '#000',
    paddingLeft: 3,
  },
  borderWIDTH: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginBottom: height * 0.04,
    marginTop: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    height: height * 0.05,
    marginBottom: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: '500',
    borderColor: '#000',
    textAlignVertical: 'center',
    paddingBottom: 10,
    color: '#4B4B4B',

  },
  phoneContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },

  icon: {
    width: wp('7%'),
    height: hp('3%'),

    position: 'absolute',
    left: 8,
  },
  clearIcon: {
     width: wp('7%'),
    height: hp('2.7%'),
    resizeMode: 'contain',
    marginRight: 1,
  },

  phoneInput: {
    borderWidth: 1,
    borderRadius: 10,

    height: height * 0.05,

    paddingLeft: wp('10.5%'), //  important for icon space
    paddingRight: 10,

    fontSize: width * 0.035,
    fontWeight: '500',
    color: '#4B4B4B',
  },
  label: {
    marginBottom: 5,
    paddingLeft: 4,
    fontSize: wp('3.8%'),
    fontWeight: '500',

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSubmit: {
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 45,
    marginBottom: 50,

    backgroundColor: '#000', // IMPORTANT
  },
  buttonClear: {

    color:'#0a7de1',
    fontSize: width * 0.04,
  },
  buttonClearFlex:{
    flexDirection: 'row',
    marginTop: 70,
    marginLeft: 10,
  },
  text: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});

export default PartnerScreen;
