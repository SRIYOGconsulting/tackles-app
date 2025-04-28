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

import Email from '../assets/icons/contact/Email.svg';
import Location from '../assets/icons/contact/Location.svg';
import Phone from '../assets/icons/contact/Phone.svg';
import Website from '../assets/icons/contact/Url.svg';
import ButtonIcon from '../assets/icons/contact/ButtonIcon.svg';
import WhatsApp from '../assets/icons/contact/WhatsApp.svg';
import Green from '../assets/icons/contact/Green.svg';
import Telegram from '../assets/icons/contact/Telegram.svg';

const {width, height} = Dimensions.get('window');

const ContactScreen = ({navigation}: {navigation: any}) => {
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
      style={{backgroundColor: '#fff', flex: 1}}
      showsVerticalScrollIndicator={false}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View
        style={{
          paddingHorizontal: width * 0.04,
          flex: 1,
          paddingTop: height * 0.02,
        }}>
        <Text style={{fontSize: height * 0.03, fontWeight: '700'}}>
          Contact Us
        </Text>
        <Text
          style={{
            fontSize: height * 0.022,
            fontWeight: '500',
            width: '80%',
            marginBottom: height * 0.025,
          }}>
          For emergency care or to schedule an appointment & visit us.
        </Text>

        {/* MAP section */}
        <View>
          <Image
            source={require('../assets/image/Rectangle.png')}
            style={{width: '100%', height: height * 0.22, resizeMode: 'cover'}}
          />
          <Image
            source={require('../assets/image/map.png')}
            style={{
              position: 'absolute',

              height: height * 0.18,
              resizeMode: 'cover',
            }}
          />
          <Image
            source={require('../assets/image/zoom.png')}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 18,
              width: 30,
              height: 30,
            }}
          />
        </View>

        {/* Company name */}
        <Text
          style={{
            fontSize: height * 0.022,
            fontWeight: '700',
            marginTop: height * 0.025,
            marginBottom: height * 0.005,
          }}>
          Tackles Techinical Services L.L.C.
        </Text>
        <Text
          style={{
            fontSize: height * 0.02,
            fontWeight: '400',
            marginBottom: height * 0.02,
          }}>
          Professional Services in Dubai
        </Text>

        {/* Contact Info Cards */}
        <View style={styles.card}>
          <Location width={height * 0.04} height={height * 0.04} />
          <View style={{gap: 2}}>
            <Text style={styles.cardTitle}>Visit us</Text>
            <Text style={styles.cardSubtitle}>Area, Dubai, U.A.E.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Email width={height * 0.04} height={height * 0.04} />
          <View style={{gap: 2}}>
            <Text style={styles.cardTitle}>Email us</Text>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={styles.cardSubtitle}>support@tackles.pro</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Phone width={height * 0.04} height={height * 0.04} />
          <View style={{gap: 2}}>
            <Text style={styles.cardTitle}>Contact us</Text>
            <TouchableOpacity onPress={() => handleCall(phoneNumber)}>
              <Text style={styles.cardSubtitle}>+971-1234567890</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Website width={height * 0.04} height={height * 0.04} />
          <View style={{gap: 2}}>
            <Text style={styles.cardTitle}>Working hours</Text>
            <TouchableOpacity onPress={openWebsite}>
              <Text style={styles.cardSubtitle}>https://tackles.pro</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: height * 0.02,
            marginBottom: height * 0.02,
          }}>
          {/* Admin Login Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#0E61CD',
              height: height * 0.055,
              width: width * 0.35,
              borderRadius: 4,
              alignItems: 'center',
              paddingHorizontal: width * 0.02,
            }}>
            <ButtonIcon height={height * 0.03} width={height * 0.03} />
            <Text
              style={{
                fontSize: height * 0.02,
                fontWeight: '500',
                marginLeft: width * 0.015,
              }}>
              Admin Login
            </Text>
          </TouchableOpacity>

          {/* WhatsApp and Telegram */}
          <View style={{flexDirection: 'row', columnGap: width * 0.05}}>
            <TouchableOpacity onPress={openWhatsApp}>
              <Green height={height * 0.05} width={height * 0.05} />
              <WhatsApp
                height={height * 0.032}
                width={height * 0.032}
                style={{
                  position: 'absolute',
                  left: height * 0.01,
                  top: height * 0.008,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openTelegram}>
              <Telegram height={height * 0.05} width={height * 0.05} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '3.8%',
    height: Dimensions.get('window').height * 0.06,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  cardTitle: {
    fontSize: Dimensions.get('window').height * 0.022,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: Dimensions.get('window').height * 0.017,
    fontWeight: '400',
  },
});

export default ContactScreen;
