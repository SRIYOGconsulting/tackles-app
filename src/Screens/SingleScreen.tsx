import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import {useNavigation} from '@react-navigation/native';
import {servicesData} from '../data/Data';
import {RootStackParamList} from '../types';

// Get screen dimensions for responsive layout
const {width, height} = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

// Define navigation prop type for screen navigation
type SingleScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleScreen'
>;

const SingleScreen: React.FC<{route: any}> = ({route}) => {
  const navigation = useNavigation<SingleScreenNavigationProp>();
  const {service} = route.params;

  // Shuffle services for the "Other Services" section
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const otherServices = shuffleArray(
    servicesData.filter(item => item.id !== service.id),
  ).slice(0, 2);

  return (
    <View style={styles.mainContainer}>
      {/* Header is placed outside ScrollView */}
      <HeaderComponent style={styles.header} />

      {/* Scrollable content */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image source={service.image} style={styles.image} />
          <Text style={[styles.title, {fontSize: scaleFont(20)}]}>
            Wallpaper Fixing
          </Text>
          <Text style={[styles.subtitle, {fontSize: scaleFont(19)}]}>
            Professional Wallpaper Fixing 
          </Text>
          <Text style={[styles.description, {fontSize: scaleFont(17)}]}>
            {service.description}
          </Text>
          <Text style={[styles.question, {fontSize: scaleFont(17)}]}>
            {service.question}
          </Text>
          <Text style={[styles.answer, {fontSize: scaleFont(17)}]}>
            {service.answer}
          </Text>
          
          <Text style={[styles.otherServicesTitle, {fontSize: scaleFont(20)}]}>
            Related Services
          </Text>
          <View style={styles.servicesContainer}>
            {otherServices.map(item => (
              <ServicesDisplaycard
                key={item.id}
                textStyle={[styles.cardText, {fontSize: scaleFont(14)}]}
                name={item.name}
                image={item.image}
                question={item.question}
                answer={item.answer}
                description={item.description}
                onPress={() =>
                  navigation.navigate('SingleScreen', {service: item})
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
    flex: 1,
  },
  image: {
    width: '100%',
    height: height * 0.28, // Adjust image size relative to screen height
    borderRadius: 8,
  },
  title: {
    color: '#0E61CD',
    fontWeight: '900',
    marginTop: '4.5%',
  },
  subtitle: {
    color: '#0E61CD',
    fontWeight: '500',
  },
  description: {
    fontWeight: '500',
    marginTop: '2.5%',
  },
  question: {
    fontWeight: '500',
    marginTop: '3%',
  },
  answer: {
    fontWeight: '500',
  },
  otherServicesTitle: {
    color: '#0E61CD',
    fontWeight: '900',
    marginTop: '1.8%',
    marginBottom: '3%',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15, // Adjust spacing between services dynamically
    flexWrap: 'wrap', // Ensure responsiveness on smaller screens
  },
  cardText: {
    marginTop: 4,
    fontWeight: '600',
  },
});

export default SingleScreen;
