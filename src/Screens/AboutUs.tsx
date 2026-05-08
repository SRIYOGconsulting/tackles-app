import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ProfessionalCard from '../components/home/ProfessionalCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OurTeamCard from '../components/home/OurTeamCard';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <Text style={styles.maintitle}>About Us</Text>
          <View style={styles.banner}>
            <Image
              source={require('../assets/aboutUs/aboutUsBanner.jpg')}
              style={styles.bannerImage}
            />
          </View>

          <View style={styles.headerWrapper}>
            <HeaderComponent style={styles.headerPadding} />
            <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />
          </View>

          <View style={styles.content}>

            <Text style={styles.title}>Our Story</Text>
            <Text style={styles.subtitle}>
              Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in Kamalpokhari, Kathmandu, Nepal, is a leading provider of digital solutions dedicated to driving digital transformation in the healthcare, employment, and tourism sectors. 
            </Text>
            <Text style={styles.lineheighpara}>
             Our mission is to empower organizations in these vital industries with innovative, scalable, technology-driven services that enhance operational efficiency and support long-term growth.
            </Text>

            <View style={styles.Padding1}></View>
            <Text style={styles.title}>Our Team</Text>
            <View style={styles.row}>
              <OurTeamCard 
                image={require('../assets/aboutUs/ourTeam/man1.png')}
                title="Painter"
                suBTitle="asdasd"
              />
               <OurTeamCard 
                image={require('../assets/aboutUs/ourTeam/women1.png')}
                title="Painter"
                suBTitle="asdasd"
              />
               <OurTeamCard 
                image={require('../assets/aboutUs/ourTeam/man1.png')}
                title="Painter"
                suBTitle="asdasd"
              />
            </View>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '90%',
    height: hp('30%'),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 91,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
    paddingTop: hp('2%'),
  },
  headerPadding: {
    paddingHorizontal: wp('4%'),
  },
  content: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2.5%'),
  },
   maintitle: {
    fontSize: wp('6.2%'),
    color: '#064E3B',
    fontWeight: '900',
    top:82,
    left:128
  },
  title: {
    fontSize: wp('5.2%'),
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: hp('0.2%'),
  },
  subtitle: {
    fontSize: wp('3.7%'),
    color: 'hsl(0, 0%, 15%)',
    fontWeight: '400',
    lineHeight:19,
    marginTop:10
  },
  lineheighpara:{
    fontSize: wp('3.7%'),
    color: 'hsl(0, 0%, 15%)',
    fontWeight: '400',
    paddingTop:8,
    lineHeight:19,
  },
  sectionTitle: {
    fontSize: wp('4%'),
    color: '#0E61CD',
    fontWeight: '900',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
    paddingHorizontal:20,
    paddingBottom:50
  },
  Padding1: {
    paddingBottom: 17,
  },

  professionalCardSpecial: {
    width: wp('18%'),
    height: wp('18%'),
  },
});

export default HomeScreen;