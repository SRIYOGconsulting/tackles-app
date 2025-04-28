import {View, ImageBackground, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ServicesCards from '../components/services/ServicesCards';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import SliderCard from '../components/services/SliderCard';
import {servicesData, topServices} from '../data/Data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ServicesScreen = ({navigation}: {navigation: any}) => {
  const numberOfItemsBeforeFooter = 6;
  const [data] = React.useState(servicesData);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    if (index === numberOfItemsBeforeFooter) {
      return (
        <View style={styles.sliderCardContainer}>
          <SliderCard
            name="Interior Designing"
            image={require('../assets/image/services/banner4.png')}
          />
        </View>
      );
    }

    return (
      <View style={styles.serviceItemContainer}>
        <ServicesDisplaycard
          id={item.id}
          name={item.name}
          description={item.description}
          navigation={navigation}
          question={item.question}
          answer={item.answer}
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
    <FlatList
      data={servicesData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={{flex: 1}}>
          {/* Header Image Background */}
          <ImageBackground
            source={require('../assets/image/services/bannerServices.png')}
            resizeMode="cover"
            style={styles.headerBackground}>
            <HeaderComponent style={styles.headerPadding} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Painting</Text>
              <Text style={styles.headerSubtitle}>
                Professional & Reliable Services in Dubai
              </Text>
            </View>
          </ImageBackground>

          {/* Top Services Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Top Services</Text>
            <FlatList
              data={topServices}
              keyExtractor={service => service.id.toString()}
              renderItem={({item}) => (
                <ServicesCards
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
              )}
              showsVerticalScrollIndicator={false}
            />
            <Text style={styles.sectionTitle}>Our Services</Text>
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: wp('100%'),
    height: hp('30%'), // Responsive height based on screen size
    justifyContent: 'space-between',
  },
  headerPadding: {},
  headerTextContainer: {
    paddingHorizontal: wp('5%'),
    marginBottom: hp('2%'),
  },
  headerTitle: {
    fontSize: wp('7%'), // Responsive font size for title
    fontWeight: '700',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: wp('4.5%'),
    fontWeight: '400',
    color: '#000',
    marginTop: hp('0.1%'),
  },
  sectionContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: '900',
    color: '#0E61CD',
    marginBottom: hp('2%'),
  },
  serviceItemContainer: {
    paddingLeft: wp('5%'),
    marginBottom: hp('3%'),
    width: wp('48%'), // Adjust width to be responsive and fit in 2 columns
  },
  sliderCardContainer: {
    paddingHorizontal: wp('5%'),
    marginBottom: hp('3%'),
  },
});

export default ServicesScreen;
