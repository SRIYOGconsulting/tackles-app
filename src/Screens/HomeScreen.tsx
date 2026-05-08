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
import ServicesCard from '../components/home/ServicesCard';
import ProfessionalCard from '../components/home/ProfessionalCard';
import NumberBar from '../components/home/NumberBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
          <Image
            source={require('../assets/image/homescreen/sanfrancisco.jpg')}
            style={styles.banner}
            resizeMode="cover"
          />

          <View style={styles.headerWrapper}>
            <HeaderComponent style={styles.headerPadding} />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>TACKLES | Fix it Today</Text>
            <Text style={styles.subtitle}>
              Professional Handyman Services in San Francisco
            </Text>

            <Text style={styles.sectionTitle}>Top Services</Text>
            <View style={styles.row}>
              <ServicesCard
                title="Painting"
                image={require('../assets/services/homeImprovement/painting.jpg')}
              />
              <ServicesCard
                title="Plumbing"
                image={require('../assets/services/HomeRepairANDMaintenance/plumbing.jpg')}
                // style={styles.serviceCardSpecial}
              />
              <ServicesCard
                title="Tiling"
                image={require('../assets/services/homeImprovement/tiling-work.jpg')}
              />
            </View>
            <View style={styles.Padding1}></View>
            <Text style={styles.sectionTitle}>Top Professionals</Text>
            <View style={styles.row}>
              <ProfessionalCard
                image={require('../assets/image/homescreen/person1.png')}
                title="Painter"
              />
              <ProfessionalCard
                image={require('../assets/image/homescreen/person5.png')}
                title="Plumber"
                // style={styles.professionalCardSpecial}
              />
              <ProfessionalCard
                image={require('../assets/image/homescreen/person3.png')}
                title="Electrician"
              />
              <ProfessionalCard
                image={require('../assets/image/homescreen/person4.png')}
                title="Mason"
              />
            </View>

            <View style={styles.numberBarContainer}>
              <NumberBar navigation={navigation} />
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
    width: '100%',
    height: hp('36%'),
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
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2.5%'),
  },
  title: {
    fontSize: wp('5%'),
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: hp('0.2%'),
    paddingLeft:77
  },
  subtitle: {
    fontSize: wp('3.5%'),
    color: '#111827',
    fontWeight: '400',
    paddingBottom: 15,
    paddingLeft:26,
    borderBottomWidth:1,
    borderStyle:'dashed'
  },
  sectionTitle: {
    fontSize: wp('4.2%'),
    color: '#064E3B',
    fontWeight: '900',
    marginTop:10,
    marginBottom:2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
  },
  Padding1: {
    paddingBottom: 5,
  },
  serviceCardSpecial: {
    width: wp('26%'),
  },
  professionalCardSpecial: {
    width: wp('18%'),
    height: wp('18%'),
  },
  numberBarContainer: {
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('5%'), // Prevent cutoff
  },
});

export default HomeScreen;