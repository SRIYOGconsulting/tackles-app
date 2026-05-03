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
            <Text style={styles.title}>Tackles | San Francisco</Text>
            <Text style={styles.subtitle}>
              Professional & Reliable Services in San Francisco
            </Text>

            <Text style={styles.sectionTitle}>Top Services</Text>
            <View style={styles.row}>
              <ServicesCard
                title="Painting"
                image={require('../assets/image/homescreen/Painting.png')}
              />
              <ServicesCard
                title="Plumbing"
                image={require('../assets/image/homescreen/Plumbing.png')}
                style={styles.serviceCardSpecial}
              />
              <ServicesCard
                title="Tiling"
                image={require('../assets/image/homescreen/Flooring.png')}
              />
            </View>
            <View style={styles.Padding1}></View>
            <Text style={styles.sectionTitle}>Top Professional</Text>
            <View style={styles.row}>
              <ProfessionalCard
                image={require('../assets/image/homescreen/person1.png')}
                title="Painter"
              />
              <ProfessionalCard
                image={require('../assets/image/homescreen/person5.png')}
                title="Plumber"
                style={styles.professionalCardSpecial}
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

            <View style={styles.Padding1}></View>
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
    fontSize: wp('6%'),
    color: '#0E61CD',
    fontWeight: '900',
    marginBottom: hp('0.2%'),
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#0E61CD',
    fontWeight: '400',
    paddingBottom: 17,
  },
  sectionTitle: {
    fontSize: wp('5%'),
    color: '#0E61CD',
    fontWeight: '900',
    marginVertical: hp('0.5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
  },
  Padding1: {
    paddingBottom: 17,
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