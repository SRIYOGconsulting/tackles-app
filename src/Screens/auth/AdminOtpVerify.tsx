import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

// Get screen dimensions
const {width, height} = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

type Props = {};

const AdminOtpVerify = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={styles.container}>
        <Text style={styles.thankYouText}>
          Thank you! OTP verified successfully. Your booking is now confirmed!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/image/otpVerify.png')}
            style={styles.image}
          />
          <Text style={styles.confirmationText}>
            OTP confirmed — booking successful!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '4%',
    paddingVertical: '5%',
    flex: 1,
  },
  thankYouText: {
    fontSize: scaleFont(22),
    fontWeight: '400',
  },
  imageContainer: {
    flex: 1,

    alignItems: 'center',
    marginTop: height * 0.1,
  },
  image: {
    width: width * 0.48, // Scale image width based on screen size
    height: height * 0.26, // Scale image height based on screen size
    resizeMode: 'contain', // Ensure the image scales proportionally
  },
  confirmationText: {
    marginTop: height * 0.04, // Adjust top margin based on screen height
    fontSize: scaleFont(20),
    width: '50%',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default AdminOtpVerify;
