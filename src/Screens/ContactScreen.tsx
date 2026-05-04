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

import Email from '../assets/icons/contact/Email.png';
import Location from '../assets/icons/contact/Location.png';
import Phone from '../assets/icons/contact/Phone.png';
import Website from '../assets/icons/contact/Url.png';
import ButtonIcon from '../assets/icons/contact/ButtonIcon.png';
import WhatsApp from '../assets/icons/contact/WhatsApp.png';
import Green from '../assets/icons/contact/Green.png';
import Telegram from '../assets/icons/contact/Telegram.png';

const { width, height } = Dimensions.get('window');

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
          For emergency care or to schedule an appointment & visit us.
        </Text>

        {/* MAP section */}
        <View>
          <Image
            source={require('../assets/image/Rectangle.png')}
            style={styles.rectangleImage}
          />
          <Image
            source={require('../assets/image/map.png')}
            style={styles.mapImage}
          />
          <Image
            source={require('../assets/image/zoom.png')}
            style={styles.zoomImage}
          />
        </View>

        {/* Company name */}
        <Text style={styles.companyName}>Tackles Techinical Services L.L.C.</Text>
        <Text style={styles.companySubtitle}>Professional Services in San Francisco</Text>

        {/* Contact Info Cards */}
        <View style={styles.card}>
          <Image source={Location} style={{ width: height * 0.03, height: height * 0.04 }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Visit us</Text>
            <Text style={styles.cardSubtitle}>Area, San Francisco, U.S.A.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={Email} style={{ width: height * 0.04, height: height * 0.03 }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Email us</Text>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={styles.cardSubtitle}>support@tackles.pro</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.card}>
          <Image source={Phone} style={{ width: height * 0.04, height: height * 0.04 }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Contact us</Text>
            <TouchableOpacity onPress={() => handleCall(phoneNumber)}>
              <Text style={styles.cardSubtitle}>+971-1234567890</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        <View style={styles.card}>
          <Image source={Website} style={{ width: height * 0.04, height: height * 0.04 }} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Working hours</Text>
            <TouchableOpacity onPress={openWebsite}>
              <Text style={styles.cardSubtitle}>https://tackles.pro</Text>
            </TouchableOpacity>
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
    paddingTop:20.7,
  },
  container: {
    paddingHorizontal: width * 0.04,
    flex: 1,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: height * 0.03,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: height * 0.022,
    fontWeight: '500',
    width: '80%',
    marginBottom: height * 0.025,
  },
  rectangleImage: {
    width: '100%',
    height: height * 0.22,
    resizeMode: 'cover',
  },
  mapImage: {
    position: 'absolute',
    height: height * 0.18,
    resizeMode: 'cover',
  },
  zoomImage: {
    position: 'absolute',
    bottom: 10,
    right: 18,
    width: 30,
    height: 30,
  },
  companyName: {
    fontSize: height * 0.022,
    fontWeight: '700',
    marginTop: height * 0.025,
    marginBottom: height * 0.005,
  },
  companySubtitle: {
    fontSize: height * 0.02,
    fontWeight: '400',
    marginBottom: height * 0.02,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '3.8%',
    height: Dimensions.get('window').height * 0.06,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  cardContent: {
    gap: 2,
  },
  cardTitle: {
    fontSize: Dimensions.get('window').height * 0.022,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: Dimensions.get('window').height * 0.017,
    fontWeight: '400',
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
  socialButtons: {
    flexDirection: 'row',
    columnGap: width * 0.05,
  },
  socialButton: {
    // No additional style needed
  },
  whatsappIcon: {
    position: 'absolute',
    left: height * 0.01,
    top: height * 0.008,
  },
});

export default ContactScreen;
