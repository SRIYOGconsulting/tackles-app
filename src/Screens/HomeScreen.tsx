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

import { servicesData2 } from '../data/Data';

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
                onPress={() => {
                  const Service1 = servicesData2.find(s => s.id === 13);

                  navigation.navigate('SingleScreen', {
                    service: Service1,
                  });
                }}
              />
              <ServicesCard
                title="Plumbing"
                image={require('../assets/services/HomeRepairANDMaintenance/plumbing.jpg')}
               onPress={() => {
                  const Service1 = servicesData2.find(s => s.id === 6);

                  navigation.navigate('SingleScreen', {
                    service: Service1,
                  });
                }}
              />
              <ServicesCard
                title="Tiling"
                image={require('../assets/services/homeImprovement/tiling-work.jpg')}
                onPress={() => {
                  const Service1 = servicesData2.find(s => s.id === 16);

                  navigation.navigate('SingleScreen', {
                    service: Service1,
                  });
                }}
              />
            </View>
            <View style={styles.Padding1}></View>
            <Text style={styles.sectionTitle}>Top Professionals</Text>
            <View style={styles.row}>
              <ProfessionalCard
                image={require('../assets/topProfessionals/1_jamesWalker.png')}
                title="James"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/2_michaelTurner.png')}
                title="Michael"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/3_matthewKing.png')}
                title="Matthew"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/5_joshua_adams.png')}
                title="Joshua"
                subtitle=""
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

  },
  subtitle: {
    fontSize: wp('3.5%'),
    color: '#111827',
    fontWeight: '400',
    paddingBottom: 15,

  },
  sectionTitle: {
    fontSize: wp('4.2%'),
    color: '#064E3B',
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 2
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
  numberBarContainer: {
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('5%'), // Prevent cutoff
  },
});

export default HomeScreen;