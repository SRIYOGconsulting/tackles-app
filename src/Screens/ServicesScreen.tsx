import React, { useMemo } from 'react';
import { View, ImageBackground, Text, FlatList, StyleSheet } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ServicesCards from '../components/services/ServicesCards';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import SliderCard from '../components/services/SliderCard';

import { topServices } from '../data/TopServicesData';
import { servicesData2 } from '../data/ServiceData';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ServicesScreen = ({ navigation }: { navigation: any }) => {
  const numberOfItemsBeforeFooter = 6;

  const data = useMemo(() => {
    return servicesData2.filter(
      (item) => item.id !== 1 && item.id !== 6
    );
  }, []);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (index === numberOfItemsBeforeFooter) {
      return (
        <View style={styles.sliderCardContainer}>
          <SliderCard
            name="Interior Designing"
            image={require('../assets/image/services/banner4.jpg')}
          />
        </View>
      );
    }

    return (
      <View style={styles.serviceItemContainer}>
        <ServicesDisplaycard
          id={item.id}
          name={item.name}
          words={item.words}
          image={item.image}
          onPress={() =>
            navigation.navigate('SingleScreen', {
              service: item,
            })
          }
        />
      </View>
    );
  };

  return (
    <View>
      <HeaderComponent style={styles.headerPadding} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}

        //  PERFORMANCE + LAZY LOADING SETTINGS
        initialNumToRender={6}        // first screen only
        maxToRenderPerBatch={10}      //  lazy load next 10 items
        windowSize={5}                // controls visible window
        updateCellsBatchingPeriod={50}
        removeClippedSubviews={true}
        getItemLayout={undefined}

        showsVerticalScrollIndicator={false}

        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <ImageBackground
              source={require('../assets/image/services/bannerServices.jpg')}
              resizeMode="cover"
              style={styles.headerBackground}
            >


              <View style={styles.headerTextContainer}>
                <Text
                  style={styles.headerTitle}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  Painting
                </Text>

                <Text
                  style={styles.headerSubtitle}
                  numberOfLines={2}
                >
                  Professional & Reliable Services in San Francisco
                </Text>
              </View>
            </ImageBackground>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle1}>Top Services</Text>

              {topServices.map((item) => (
                <ServicesCards
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  navigation={navigation}
                  question={item.question}
                  answer={item.answer}
                  onPress={() =>
                    navigation.navigate('SingleScreen', {
                      service: item,
                    })
                  }
                />
              ))}

              <Text style={styles.sectionTitle2}>More Services</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },

  headerBackground: {
    width: wp('100%'),
    height: hp('30%'),
    justifyContent: 'space-between',
    boxShadow: '0px 0px 2px #7cbc7a',
  },

  headerPadding: {
    marginTop: hp('2%'),
    paddingHorizontal: 15.7,
    position: 'absolute',
    zIndex: 9999,
  },

  headerTextContainer: {
    position: 'absolute',
    top: hp('16%'),
    left: wp('5%'),
    width: wp('90%'),
    zIndex: 99,
  },

  headerTitle: {
    fontSize: wp('7%'),
    fontWeight: '800',
    color: '#fff',
    lineHeight: hp('5%'),
    marginBottom: hp('1%'),
    flexWrap: 'wrap',
  },

  headerSubtitle: {
    fontSize: wp('3.8%'),
    fontWeight: '500',
    color: '#fff',
    lineHeight: hp('2.8%'),
    width: wp('90%'),
    flexWrap: 'wrap',
  },

  sectionContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('4%'),
    width: wp('95%'),
  },

  sectionTitle1: {
    fontSize: wp('4.5%'),
    fontWeight: '800',
    color: '#064E3B',
    marginBottom: hp('3.2%'),
    marginTop: hp(-1),
  },

  sectionTitle2: {
    fontSize: wp('4.5%'),
    fontWeight: '800',
    color: '#064E3B',
    marginBottom: hp('2%'),
    marginTop: hp(-1),

  },


  serviceItemContainer: {
    paddingLeft: wp('5%'),
    marginBottom: hp('3%'),
    width: wp('48%'),
  },

  sliderCardContainer: {
    paddingHorizontal: wp('5%'),
    marginBottom: hp('3%'),
  },
});

export default ServicesScreen;
