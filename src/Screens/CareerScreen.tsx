import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import HeaderComponent from '../../src/components/HeaderComponent';
import { area, positionAppliedFor, services } from '../../src/data/Data';
import TextArea from '../components/TextArea';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import countryLogo from '../assets/image/header/right.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FileUploadBox from '../components/FileUploadBox';
import ClearFormIcon from '../assets/icons/contact/clear.png'
import DropdownAdd from '../components/DropdownAdd';


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

const CareerScreen = ({ }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [experience, setExperience] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [coverMessage, setCoverMessage] = useState('');

  // dropdown states (FIXED)
  const [selectedPosition, setSelectedPosition] = useState<string[]>([]);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string[]>([]);

  const handleClearForm = () => {
  Alert.alert(
    'Clear Form',
    'Are you sure you want to clear all fields?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, Clear',
        style: 'destructive',
        onPress: () => {
          setName('');
          setNumber('');
          setEmail('');
          setMessage('');
          setExperience('');
          setPolicyNumber('');
          setCoverMessage('');

          setSelectedPosition([]);
          setSelectedExpertise([]);
          setSelectedArea([]);
          setEmergencyNumber('');
        },
      },
    ]
  );
};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <HeaderComponent style={styles.header} />
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>TACKLES - Join Now</Text>

        <Text style={styles.borderWIDTH} />

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your Full Name"
          value={name}
          onChangeText={setName}
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

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
        />

        <Text style={styles.label}>Position Applied For<Text style={{ color: 'red' }}>*</Text></Text>
        <DropdownAdd
          options={positionAppliedFor}
          placeholder="Select the position you are applying for"
          placeholderColor="#4B4B4B"
          value={selectedPosition}
          onSelectOption={setSelectedPosition}
        />

        <Text style={styles.label}>Area of Expertise<Text style={{ color: 'red' }}>*</Text></Text>
        <DropdownAdd
          options={services}
          placeholder="Select the area of expertise"
          placeholderColor="#4B4B4B"
          value={selectedExpertise}
          onSelectOption={setSelectedExpertise}
        />

        <Text style={styles.label}>Years of Experience<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          placeholder="Enter your years of experience in the field"
          value={experience}
          onChangeText={(text) => {
            const onlyNumbers = text.replace(/[^0-9]/g, '');
            setExperience(onlyNumbers);
          }}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
          keyboardType="numeric"
        />

        <Text style={styles.label}>ID Proof</Text>
        <FileUploadBox />


        <Text style={styles.label}>Preferred Working Area<Text style={{ color: 'red' }}>*</Text></Text>
        <DropdownAdd
          options={area}
          placeholder="Select your preferred working area"
          placeholderColor="#4B4B4B"
          value={selectedArea}
          onSelectOption={setSelectedArea}
        />

        <Text style={styles.label}>Insurance Policy Number</Text>
        <TextInput
          placeholder="Enter the insurance policy number"
          value={policyNumber}
          onChangeText={(text) => {
            const onlyNumbers = text.replace(/[^0-9]/g, '');
            setPolicyNumber(onlyNumbers);
          }}
          style={styles.input}
          placeholderTextColor={'#4B4B4B'}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Emergency Contact Number</Text>
        <View style={styles.phoneContainer}>
          <Image
            source={countryLogo}
            style={styles.icon}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Enter your emergency contact number"
            value={emergencyNumber}
            onChangeText={(value) => {
              let cleaned = value.replace(/[^0-9]/g, '');
              cleaned = cleaned.slice(0, 10);

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

              setEmergencyNumber(formatted);
            }}
            keyboardType="number-pad"
            style={styles.phoneInput}
          />
        </View>

        <Text style={styles.label}>Resume/CV</Text>
        <FileUploadBox />

        <Text style={styles.label}>Cover Letter</Text>
        <TextArea
          value={coverMessage}
          onChangeText={setCoverMessage}
          placeholder=""
          placeholderTextColor="#4B4B4B"
          maxHeight={160}
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

          <Pressable style={styles.buttonClearFlex} onPress={handleClearForm}>
            <Image source={ClearFormIcon} style={styles.clearIcon} />
            <Text style={styles.buttonClear}>Clear form</Text>
          </Pressable>

          <Button
            style={styles.buttonSubmit}
            textStyle={{ color: 'white', textAlign: 'center' }}
          // onPress={handleSubmit}
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
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
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
    marginTop: 30,
    marginBottom: 50,

    backgroundColor: '#000', // IMPORTANT
  },
  buttonClear: {

    color: '#0a7de1',
    fontSize: width * 0.04,
  },
  buttonClearFlex: {
    flexDirection: 'row',
    marginTop: 55,
    marginLeft: 10,
  },
  text: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});

export default CareerScreen;
