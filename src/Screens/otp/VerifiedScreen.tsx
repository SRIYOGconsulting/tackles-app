import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

const VerifiedScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderComponent style={styles.header} />
      <View style={styles.contentContainer}>
        <Text style={styles.thankYouText}>
          Thank you! OTP verified successfully. Your booking is now confirmed!
        </Text>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/image/otpVerify.png')} />
          <Text style={styles.confirmationText}>
            OTP confirmed — booking successful!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  contentContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '5%',
    flex: 1,
  },
  thankYouText: {
    fontSize: 22,
    fontWeight: '400',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationText: {
    marginTop: '10%',
    fontSize: 20,
    width: '50%',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default VerifiedScreen;
