import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NumberBar = ({navigation}: {navigation: any}) => {
  const dynamicWidth = wp('85%'); // Default width for smaller screens
  const fontSize = wp('5%'); // Font size for the phone number
  const helpFontSize = wp('4%'); // Font size for help text

  return (
    <View style={[styles.container, {width: dynamicWidth}]}>
      <View style={styles.phoneContainer}>
        <Image
          source={require('../../assets/image/header/right.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={[styles.phoneNumber, {fontSize}]}>055 616 5029</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('OTP')}
        style={styles.helpButton}>
        <Text style={[styles.helpText, {fontSize: helpFontSize}]}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('6%'), // Dynamic height based on screen size
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0E61CD',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2%'), // Padding adjusted for responsiveness
    flex: 1,
  },
  icon: {
    height: hp('4%'), // Responsive icon height
    width: wp('6%'), // Responsive icon width
  },
  phoneNumber: {
    fontWeight: '700',
    letterSpacing: 2,
    color: '#4B4B4B',
    paddingHorizontal: wp('5%'), // Adjust padding for responsiveness
    flex: 1,
    textAlign: 'center',
  },
  helpButton: {
    backgroundColor: '#0E61CD',
    width: wp('20%'), // Adjust width for help button
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  helpText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default NumberBar;
