import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

import Email from '../assets/icons/contact/email_1.png';
import Location from '../assets/icons/contact/location-pin.png';
import Website from '../assets/icons/contact/globe.png';

const { width, height } = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ContactScreen = ({ navigation }: { navigation: any }) => {
  const openWebsite = () => {
    Linking.openURL('https://tackles.pro/');
  };
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@tackles.pro');
  };
  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(err =>
      console.error('An error occurred', err),
    );
  };

  const phoneNumber = '+971-1234567890';
  const openWhatsApp = () => {
    Linking.openURL('https://www.whatsapp.com/');
  };
  const openTelegram = () => {
    Linking.openURL('https://telegram.org/');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}>
      <HeaderComponent style={styles.header} />
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          We're always here to help you out.
        </Text>

        {/* MAP section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/sanfranciscomap.png')}
            style={styles.rectangleImage}
          />
        </View>

        {/* Company name */}
        <Text style={styles.companyName}>TACKLES Pro</Text>
        <Text style={styles.companySubtitle}>Professional Services in San Francisco</Text>

        {/* Contact Info Cards */}
        <View style={styles.GridBox}>
          <View style={styles.card}>
            <View style={styles.imageContainer2}>

              <Image source={Location} style={{ width: height * 0.035, height: height * 0.035, resizeMode: 'contain' }} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Visit us</Text>
              <Text style={styles.cardSubtitle}>600 California St, San Francisco,
                CA 94108.</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={Email} style={{ width: height * 0.033, height: height * 0.033, resizeMode: 'contain', bottom: 3 }} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Email us</Text>
              <TouchableOpacity onPress={handleEmailPress}>
                <Text style={styles.cardSubtitle}>support@tackles.pro</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.card}>
            <Image source={Phone} style={{ width: height * 0.035, height: height * 0.035, resizeMode: 'contain' }} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Contact us</Text>
              <TouchableOpacity onPress={() => handleCall(phoneNumber)}>
                <Text style={styles.cardSubtitle}>+1-1234567890</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={[styles.card]}>
            <Image source={Website} style={{ width: height * 0.035, height: height * 0.035, resizeMode: 'contain', bottom: 3 }} />

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Working hours</Text>
              <TouchableOpacity onPress={openWebsite}>
                <Text style={styles.cardSubtitle}>https://tackles.pro</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        {/* Buttons */}
        {/* <View style={styles.buttonsContainer}> */}
        {/* Admin Login Button */}
        {/* <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.adminButton}>
            <Image source={ButtonIcon} style={{ width: height * 0.03, height: height * 0.03 }} />

            <Text style={styles.adminButtonText}>Admin Login</Text>
          </TouchableOpacity> */}

        {/* WhatsApp and Telegram */}
        {/* <View style={styles.socialButtons}>
            <TouchableOpacity onPress={openWhatsApp} style={styles.socialButton}>
              <Image
                source={WhatsApp}
                style={{width: height * 0.05, height: height * 0.05 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openTelegram}>

              <Image source={Telegram} style={{width: height * 0.05, height: height * 0.05 }} />
            </TouchableOpacity>
          </View> */}
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    marginTop: hp('2.01%'),
    paddingHorizontal: 17
  },
  container: {
    paddingHorizontal: width * 0.04,
    flex: 1,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: height * 0.029,
    fontWeight: '700',
    marginBottom: height * 0.001,
    color: '#064E3B'
  },
  subtitle: {
    fontSize: height * 0.017,
    fontWeight: '400',
    width: '80%',
    marginBottom: height * 0.02,

  },
  imageContainer: {
    width: '100%',
    height: 230,
    overflow: 'hidden',
    borderRadius: 12,
  },

  rectangleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'cover'
  },
  companyName: {
    fontSize: height * 0.022,
    fontWeight: '600',
    marginTop: height * 0.025,
    marginBottom: height * 0.003,
    color: '#064E3B'

  },
  companySubtitle: {
    fontSize: height * 0.016,
    fontWeight: '400',
    marginBottom: height * 0.02,
    paddingLeft: 3
  },
  card: {
    flexDirection: "row",
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.1,
    marginBottom: Dimensions.get('window').height * 0.023,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    boxShadow: '0px 0px 2px #000',
    justifyContent: 'space-around',
    paddingLeft: 10,

  },
  imageContainer2:{
    borderWidth:0
  },
  cardContent: {
    gap: 2,
    width: '73%',

  },
  cardTitle: {
    fontSize: Dimensions.get('window').height * 0.02,
    fontWeight: '500',
    color: "hsl(120, 100%, 20%)",
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  cardSubtitle: {
    fontSize: Dimensions.get('window').height * 0.015,
    fontWeight: '400',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  GridBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  adminButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0E61CD',
    height: height * 0.055,
    width: width * 0.35,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
  },
  adminButtonText: {
    fontSize: height * 0.02,
    fontWeight: '500',
    marginLeft: width * 0.015,
  },

});

export default ContactScreen;
