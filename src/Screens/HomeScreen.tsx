import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ServicesCard from '../components/home/ServicesCard';
import ProfessionalCard from '../components/home/ProfessionalCard';
import NumberBar from '../components/home/NumberBar';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { servicesData2 } from '../data/ServiceData';

const serviceMap = {
  13: servicesData2.find(s => s.id === 13),
  6: servicesData2.find(s => s.id === 6),
  16: servicesData2.find(s => s.id === 16),
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'home'}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      bounces={false}
      ListHeaderComponent={() => (
        <View style={styles.container}>

          {/* Banner */}
          <Image
            source={require('../assets/image/homescreen/sanfrancisco.jpg')}
            style={styles.banner}
            resizeMode="cover"
          />

          <View style={styles.headerWrapper}>
            <HeaderComponent />
          </View>

          {/* Content */}
          <View style={styles.content}>

            <Text style={styles.title}>TACKLES | Fix it Today</Text>

            <Text style={styles.subtitle}>
              Professional Handyman Services in San Francisco
            </Text>

            {/* Top Services */}
            <Text style={styles.sectionTitle}>Top Services</Text>

            <View style={styles.row}>
              <ServicesCard
                title="Painting"
                image={require('../assets/services/homeImprovement/painting.jpg')}
                onPress={() =>
                  navigation.navigate('SingleScreen', {
                    service: serviceMap[13],
                  })
                }
              />

              <ServicesCard
                title="Plumbing"
                image={require('../assets/services/HomeRepairANDMaintenance/plumbing.jpg')}
                onPress={() =>
                  navigation.navigate('SingleScreen', {
                    service: serviceMap[6],
                  })
                }
              />

              <ServicesCard
                title="Tiling"
                image={require('../assets/services/homeImprovement/tiling-work.jpg')}
                onPress={() =>
                  navigation.navigate('SingleScreen', {
                    service: serviceMap[16],
                  })
                }
              />
            </View>

            <View style={{ height: 15 }} />

            {/* Professionals */}
            <Text style={styles.sectionTitle}>Top Professionals</Text>

            <View style={styles.row}>
              <ProfessionalCard
                image={require('../assets/topProfessionals/1_jamesWalker.jpg')}
                title="James"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/2_michaelTurner.jpg')}
                title="Michael"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/3_matthewKing.jpg')}
                title="Matthew"
                subtitle=""
              />
              <ProfessionalCard
                image={require('../assets/topProfessionals/5_joshua_adams.jpg')}
                title="Joshua"
                subtitle=""
              />
            </View>

            <View style={styles.numberBarContainer}>
              <NumberBar navigation={navigation} />
            </View>

          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  banner: {
    width: '100%',
    height: 240,
  },

  headerWrapper: {
    position: 'absolute',
    top: hp('2%'),
    left: 0,
    right: 0,
    paddingHorizontal: wp('0.15%'),
    zIndex: 10,
  },
  content: {
    paddingHorizontal: wp('4%'),
    paddingTop: 15,
  },

  title: {
    fontSize: wp('5%'),
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: wp('3.5%'),
    color: '#111827',
    fontWeight: '400',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: wp('4.2%'),
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },

  numberBarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});

export default HomeScreen;