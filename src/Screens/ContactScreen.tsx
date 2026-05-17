import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';

import Email from '../assets/icons/contact/email_1.png';
import Location from '../assets/icons/contact/location-pin.png';
import Website from '../assets/icons/contact/globe.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ICON_SIZE = hp('3.3%');

const ContactScreen = ({ }: { navigation: any }) => {
  const openWebsite = useCallback(() => {
    Linking.openURL('https://tackles.pro/');
  }, []);

  const handleEmailPress = useCallback(() => {
    Linking.openURL('mailto:support@tackles.pro');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent style={styles.header} />

      <View style={styles.divider} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.container}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>We're always here to help you out.</Text>

          {/* MAP */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/image/sanfranciscomap.png')}
              style={styles.mapImage}
              resizeMode="cover"
            />
          </View>

          {/* COMPANY */}
          <Text style={styles.companyName}>TACKLES Pro</Text>
          <Text style={styles.companySubtitle}>
            Professional Handyman Services in San Francisco
          </Text>

          {/* CARDS */}
          <View style={styles.GridBox}>

            {/* LOCATION */}
            <View style={styles.card}>
              <Image source={Location} style={styles.icon} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Visit us</Text>
                <Text style={styles.cardSubtitle}>
                  600 California St, San Francisco, CA 94108.
                </Text>
              </View>
            </View>

            {/* EMAIL */}
            <View style={styles.card}>
              <Image source={Email} style={styles.icon} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Email us</Text>
                <TouchableOpacity onPress={handleEmailPress}>
                  <Text style={styles.cardSubtitle}>
                    support@tackles.pro
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* WEBSITE */}
            <View style={styles.card}>
              <Image source={Website} style={styles.icon} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Website</Text>
                <TouchableOpacity onPress={openWebsite}>
                  <Text style={styles.cardSubtitle}>
                    https://tackles.pro
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '1%',
  },

  header: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('4%'),
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginTop: 16,
  },

  container: {
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },

  title: {
    fontSize: wp('5.8%'),
    fontWeight: '700',
    color: '#064E3B',
  },

  subtitle: {
    fontSize: wp('3.8%'),
    marginTop: 4,
    marginBottom: hp('2%'),
  },

  imageContainer: {
    width: '100%',
    height: 230,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },

  mapImage: {
    width: '100%',
    height: '100%',
  },

  companyName: {
    fontSize: wp('4.8%'),
    fontWeight: '600',
    marginTop: hp('2.5%'),
    color: '#064E3B',
  },

  companySubtitle: {
    fontSize: wp('3.6%'),
    marginBottom: hp('2%'),
  },

  GridBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: hp('10%'),
    marginBottom: hp('2%'),
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2,
    overflow: 'hidden',
    boxShadow: '0px 0px 2px #000',
    justifyContent: 'space-around',
    paddingLeft: 10,
  },

  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain',
  },

  cardContent: {
    width: '75%',
    marginLeft: 10,
  },

  cardTitle: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#166534',
  },

  cardSubtitle: {
    fontSize: wp('3.4%'),
  },
});

export default ContactScreen;
