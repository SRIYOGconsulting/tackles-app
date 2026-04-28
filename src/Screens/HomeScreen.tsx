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
            source={require('../assets/image/homescreen/banner1.png')}
            style={styles.banner}
            resizeMode="cover"
          />

          <View style={styles.headerWrapper}>
            <HeaderComponent style={styles.headerPadding} />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Tackles | Dubai</Text>
            <Text style={styles.subtitle}>
              Professional & Reliable Services in Dubai
            </Text>

            <Text style={styles.sectionTitle}>Top Services</Text>
            <View style={styles.row}>
              <ServicesCard
                title="Painting"
                image={require('../assets/image/homescreen/painting1.png')}
              />
              <ServicesCard
                title="Plumbing"
                image={require('../assets/image/homescreen/plumbing.png')}
                style={styles.serviceCardSpecial}
              />
              <ServicesCard
                title="Tiling"
                image={require('../assets/image/homescreen/flooring.png')}
              />
            </View>

            <Text style={styles.sectionTitle}>Top Professional</Text>
            <View style={styles.row2}>
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
    backgroundColor: '#fff',
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
    height: hp('34%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerWrapper: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },

  headerPadding: {
    paddingHorizontal: wp('4%'),
  },

  content: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
    alignItems: "center"
  },

  title: {
    fontSize: wp('6.5%'),
    color: 'hsl(0, 0%, 30%)',
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: wp('3.8%'),
    color: 'hsl(0, 0%, 35%)',
    fontFamily: 'AnticSlab-Regular',
    marginTop: hp('0.5%'),
    marginBottom: hp('2%'),
    lineHeight: hp('2.2%'),
  },

  sectionTitle: {
    fontSize: wp('5.0%'),
    color: 'hsl(0, 0%, 30%)',
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
    gap: 15,
    backgroundColor: '#008080', 
    padding: wp('3%'), 
    paddingRight:wp('5%'),
    paddingLeft:wp('5%'),    
            
  },

  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
    gap: 15,
    backgroundColor: '#008080', 
    padding: wp('3%'), 
    paddingRight:wp('5%'),
    paddingLeft:wp('5%'),   
    borderRadius: 10,           
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
    marginTop: hp('2%'),
    marginBottom: hp('10%'),
    paddingBottom: hp('8%'),
  },
});

export default HomeScreen;
