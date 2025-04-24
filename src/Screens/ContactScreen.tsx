import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SearchBar from '../components/SearchBar';
import Email from '../assets/icons/contact/Email.svg';
import Location from '../assets/icons/contact/Location.svg';
import Phone from '../assets/icons/contact/Phone.svg';
import Website from '../assets/icons/contact/Url.svg';
import ButtonIcon from '../assets/icons/contact/ButtonIcon.svg';
import WhatsApp from '../assets/icons/contact/WhatsApp.svg';
import Green from '../assets/icons/contact/Green.svg';
import Telegram from '../assets/icons/contact/Telegram.svg';
type Props = {};

const ContactScreen = ({navigation}: {navigation: any}) => {
  const openWebsite = () => {
    Linking.openURL('https://tackles.pro/');
  };
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@tackles.pro');
  };
  const handleCall = ({phoneNumber}: any) => {
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
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={{paddingHorizontal: '4%', flex: 1, paddingTop: '5.5%'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Contact Us</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            width: '80%',
            marginBottom: '4%',
          }}>
          For emergency care or to schedule an appointment & visit us.
        </Text>
        <View>
          <Image source={require('../assets/image/Rectangle.png')} />
          <Image
            source={require('../assets/image/map.png')}
            style={{position: 'absolute'}}
          />
          <Image
            source={require('../assets/image/zoom.png')}
            style={{position: 'absolute', bottom: 10, right: 18}}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            marginTop: '4%',
            marginBottom: '0.8%',
          }}>
          Tackles Techinical Services L.L.C.
        </Text>
        <Text style={{fontSize: 16, fontWeight: '400', marginBottom: '4%'}}>
          Professional Services in Dubai
        </Text>
        <View style={styles.card}>
          <Location width={30} height={30} />
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Visit us</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              Area, Dubai, U.A.E.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Email width={30} height={30} />
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Email us</Text>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                support@tackles.pro
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Phone width={30} height={30} />
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Contact us</Text>

            <TouchableOpacity onPress={() => handleCall(phoneNumber)}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                +971-1234567890
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Website width={30} height={30} />
          <View style={{gap: 2}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Working hours</Text>

            <TouchableOpacity onPress={openWebsite}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                https://tackles.pro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginTop: '6%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#0E61CD',
              height: 40,
              width: 132,
              borderRadius: 4,
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <ButtonIcon height={24} width={24} />
            <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 5}}>
              Admin Login
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', columnGap: 20}}>
            <TouchableOpacity onPress={openWhatsApp}>
              <Green height={40} width={40} />
              <WhatsApp
                height={25}
                width={25}
                style={{position: 'absolute', left: 8, top: 7}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openTelegram}>
              <Telegram height={40} width={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: '3.8%',
    alignItems: 'center',

    height: 46,
    marginBottom: '1%',
  },
});

export default ContactScreen;
