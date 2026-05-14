import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import OurTeamCard from '../components/home/OurTeamCard';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CareerScreen = ({ }: { navigation: any }) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'career'}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      bounces={false}
 
      ListHeaderComponent={() => (
        <View style={styles.container}>

          {/* HEADER */}
          <View style={styles.headerWrapper}>
            <HeaderComponent style={styles.headerPadding} />
            <View style={styles.line} />
          </View>

          {/* BANNER (optimized rendering) */}
          <View style={styles.banner}>
            <Image
              source={require('../assets/aboutUs/aboutUS.jpeg')}
              style={styles.bannerImage}
              resizeMode="cover"
              fadeDuration={0}
            />
          </View>

          {/* CONTENT */}
          <View style={styles.content}>

            <Text style={styles.title}>Career Screen</Text>

            <Text style={styles.subtitle}>
              Tackles is an A-grade handyman service company delivering
              professional solutions for plumbing, painting, air conditioning,
              flooring, and wall repairs with consistent quality and dependable
              service standards.
            </Text>

            <Text style={styles.lineheighpara}>
              Our mission is to offer complete repair and maintenance services
              under one trusted platform, eliminating the need to search
              multiple providers for different household and commercial
              requirements.
            </Text>

            <Text style={styles.lineheighpara}>
              Our vision is to build a trusted handyman brand recognized for
              professionalism, accessibility, and service excellence through
              long-term client relationships and consistent work quality.
            </Text>

            {/* TEAM */}
            <View style={{ height: 18 }} />

            <Text style={styles.title}>Our Team</Text>

            <View style={styles.row}>
              <OurTeamCard
                image={require('../assets/topProfessionals/1_jamesWalker.jpg')}
                title="James Walker"
                suBTitle="Deep Cleaning Specialist"
              />

              <OurTeamCard
                image={require('../assets/topProfessionals/2_michaelTurner.jpg')}
                title="Michael Turner"
                suBTitle="Pressure Washing Technician"
              />

              <OurTeamCard
                image={require('../assets/topProfessionals/3_matthewKing.jpg')}
                title="Matthew King"
                suBTitle="Smart Home Installation Engineer"
              />
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

  headerWrapper: {
    paddingTop: hp('2%'),
  },

  headerPadding: {
    paddingHorizontal: wp('4%'),
  },

  line: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginTop: 16,
  },

  banner: {
    width: '90%',
    height: hp('30%'),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 25,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
  },

  content: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2.5%'),
  },

  title: {
    fontSize: wp('5.2%'),
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: wp('3.7%'),
    color: 'hsl(0, 0%, 15%)',
    fontWeight: '400',
    lineHeight: 19,
    marginTop: 10,
  },

  lineheighpara: {
    fontSize: wp('3.7%'),
    color: 'hsl(0, 0%, 15%)',
    fontWeight: '400',
    paddingTop: 8,
    lineHeight: 19,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('0.5%'),
    marginBottom:'5%'
  },
});

export default CareerScreen;