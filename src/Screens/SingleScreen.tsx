import React, { useMemo } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import { servicesData2 } from '../data/ServiceData';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const scaleFont = (size: number) => (size * width) / 375;


const Button = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={['#064e3b', '#065f46', '#047857']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button1}
      >
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const SingleScreen = ({ route, navigation }: any) => {
  const { service } = route.params;

  
  const otherServices = useMemo(() => {
    const excludedIds = [6.1, 6.2];

    const filtered = servicesData2.filter(
      item => !excludedIds.includes(item.id),
    );

    return [...filtered].sort(() => Math.random() - 0.5).slice(0, 2);
  }, []);

  
  const formatDescription = (text: string) => {
    if (!text) return '';

    const words = text.split(' ');
    const result: string[] = [];

    let segment: string[] = [];
    let count = 0;

    for (let i = 0; i < words.length; i++) {
      segment.push(words[i]);
      count++;

      if (count >= 20 && words[i].endsWith('.')) {
        result.push(segment.join(' '));
        segment = [];
        count = 0;
      }
    }

    if (segment.length) result.push(segment.join(' '));

    return result.join('\n\n');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <HeaderComponent style={styles.header} />

      <View style={styles.headerline} />

      <View style={styles.container}>
        {/* IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={service.image}
            style={styles.image}
            resizeMode="cover"
            fadeDuration={0}
          />
        </View>

        {/* TITLE */}
        <Text style={[styles.subtitle, { fontSize: scaleFont(17) }]}>
          {service.name} services in San Francisco
        </Text>

        {/* DESCRIPTION */}
        <Text style={[styles.description, { fontSize: scaleFont(14) }]}>
          {formatDescription(service.description)}
        </Text>

        {/* QUESTION */}
        <Text style={[styles.question, { fontSize: scaleFont(15) }]}>
          {service.question}
        </Text>

        {/* ANSWER */}
        <Text style={[styles.answer, { fontSize: scaleFont(14) }]}>
          {service.answer}
        </Text>

        {/* BUTTON */}
        <View style={styles.buttonPadding}>
          <Button
            onPress={() =>
              navigation.navigate('Booking', {
                screen: 'ServiceBookingScreen',
                params: { service },
              })
            }
          >
            Book a Service
          </Button>
        </View>

        {/* RELATED SERVICES */}
        <Text style={[styles.otherServicesTitle, { fontSize: scaleFont(18) }]}>
          Related Services
        </Text>

        <View style={styles.servicesContainer}>
          {otherServices.map(item => (
            <ServicesDisplaycard
              key={item.id}
              style={{ width: '48%' }}
              words={item.words}
              name={item.name}
              image={item.image}
              question={item.question}
              answer={item.answer}
              description={item.description}
              onPress={() =>
                navigation.navigate('SingleScreen', {
                  service: item,
                })
              }
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  header: {
    marginTop: hp('2%'),
    paddingHorizontal: 15.7,
  },

  headerline: {
    paddingTop: 16,
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },

  scrollView: {
    flex: 1,
  },

  container: {
    paddingHorizontal: '5%',
    paddingTop: '6%',
  },

  imageContainer: {
    width: '100%',
    height: height * 0.27,
    overflow: 'hidden',
    borderRadius: 8,

    elevation:5,
    marginBottom: 15,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  subtitle: {
    color: '#064E3B',
    fontWeight: '700',
    marginBottom: '4%',
  },

  description: {
    fontWeight: '500',
  },

  question: {
    fontWeight: '800',
    marginTop: '3%',
    marginBottom: '2%',
  },

  answer: {
    fontWeight: '500',
    marginBottom: '4%',
  },

  otherServicesTitle: {
    color: '#064E3B',
    fontWeight: '900',
    marginTop: '1.8%',
    marginBottom: '3%',
  },

  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '5%',
  },

  buttonPadding: {
    paddingBottom: 20,
    alignItems: 'center',
    marginTop: 14,
  },

  button1: {
    width: width * 0.56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 39,
  },

  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SingleScreen;