import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ImportantForm from '../components/DatePicker';

type Props = {};

const ServiceBookingScreen = (props: Props) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={{paddingHorizontal: '4%', paddingVertical: '6%'}}>
        <Text>Professional & Reliable Services</Text>
        <Text>Request a Services</Text>

        <View style={{gap: '5%', marginTop: '6%'}}>
          <TextInput placeholder="Full Name " style={styles.inputBox} />
          <TextInput
            placeholder="Phone Number "
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Select Services"
            style={styles.inputBox}
            placeholderTextColor={'#4B4B4B'}
          />
          <TextInput placeholder="Select Date" style={styles.inputBox} />
          <TextInput placeholder="Select Location" style={styles.inputBox} />
          <TextInput placeholder="Select shift" style={styles.inputBox} />
          <TextInput
            placeholder="Message"
            style={styles.inputBox}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
          />
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor: '#0E61CD', borderRadius: 4}}>
        <Text style={{color: '#fff'}}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: '2.5%',
    color: '#000',
    paddingBottom: 10,
    paddingTop: 14,
  },
});

export default ServiceBookingScreen;
