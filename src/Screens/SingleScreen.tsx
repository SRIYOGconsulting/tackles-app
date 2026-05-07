import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import { useNavigation } from '@react-navigation/native';
import { servicesData2 } from '../data/Data';
import { RootStackParamList } from '../types';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ children, style, textStyle, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={['#064e3b', '#065f46', '#047857']} // emerald gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button1, style]}
      >
        <Text style={[styles.text, textStyle]}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// Get screen dimensions for responsive layout
const { width, height } = Dimensions.get('window');

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

const SingleScreen: React.FC<{ route: any }> = ({ route }) => {
  const navigation = useNavigation<SingleScreenNavigationProp>();
  const { service } = route.params;

  // Shuffle services for the "Other Services" section
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // this is for dummy data in the Data.ts
  const excludedIds = [6.1, 6.2];

  const otherServices = shuffleArray(
    servicesData2.filter(item => !excludedIds.includes(item.id)),
  ).slice(0, 2);

  return (
    <View style={styles.mainContainer}>
      {/* Header is placed outside ScrollView */}
      <HeaderComponent style={styles.header} />

      {/* Scrollable content */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: scaleFont(20) }]}>
            {service.name}
          </Text>
          <Image source={service.image} style={styles.image} />
          <Text style={[styles.subtitle, { fontSize: scaleFont(19) }]}>
            {`About ${service.name}`}
          </Text>
          <Text style={[styles.description, { fontSize: scaleFont(17) }]}>
            {service.description}
          </Text>
          <Text style={[styles.question, { fontSize: scaleFont(17) }]}>
            {service.question}
          </Text>
          <Text style={[styles.answer, { fontSize: scaleFont(17) }]}>
            {service.answer}
          </Text>

          <Text style={[styles.subtitle, { fontSize: scaleFont(19) }]}>
            {`Example of ${service.name}`}
          </Text>
          <Text style={[styles.description2, { fontSize: scaleFont(17) }]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro harum architecto sequi nobis mollitia facere dolorum odio laborum ipsam qui.
          </Text>

          <View style={styles.servicesContainer2}>
            {otherServices.map(item => (
              <ServicesDisplaycard
                style={{ width: '48%' }}
                words={item.words}
                key={item.id}
                textStyle={[styles.cardText, { fontSize: scaleFont(14) }]}
                name={item.name}
                image={item.image}
                question={item.question}
                answer={item.answer}
                description={item.description}
                onPress={() =>
                  navigation.navigate('SingleScreen', { service: item })
                }
              />
            ))}
          </View>

          <Text style={[styles.description2, { fontSize: scaleFont(17) }]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro harum architecto sequi nobis mollitia facere dolorum odio laborum ipsam qui.
          </Text>

          <View style={styles.buttonPadding}>
            <Button
              style={styles.button1}
              textStyle={{ color: 'white', textAlign: 'center', }}
              onPress={() => navigation.navigate('ViewBooking')}
            >
              Book a service
            </Button>

          </View>

          <Text style={[styles.otherServicesTitle, { fontSize: scaleFont(20) }]}>
            Related Services
          </Text>
          <View style={styles.servicesContainer}>
            {otherServices.map(item => (
              <ServicesDisplaycard
                style={{ width: '48%' }}
                words={item.words}
                key={item.id}
                textStyle={[styles.cardText, { fontSize: scaleFont(14) }]}
                name={item.name}
                image={item.image}
                question={item.question}
                answer={item.answer}
                description={item.description}
                onPress={() =>
                  navigation.navigate('SingleScreen', { service: item })
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
    paddingTop: 20.7,
    paddingBottom: 16
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
    marginBottom: '4%',
    resizeMode:'contain'
  },
  title: {
    color: '#0E61CD',
    fontWeight: '900',
    marginTop: '2%',
    marginBottom: "4%"
  },
  subtitle: {
    color: '#0E61CD',
    fontWeight: '700',
    marginBottom: '4%'
  },
  description: {
    fontWeight: '500',
  },
  description2: {
    fontWeight: '500',
    marginBottom: '10%'
  },
  question: {
    fontWeight: '500',
    marginTop: '3%',
  },
  answer: {
    fontWeight: '500',
    marginBottom: '4%'
  },
  otherServicesTitle: {
    color: '#0E61CD',
    fontWeight: '900',
    marginTop: '1.8%',
    marginBottom: '3%',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Keeps even spacing between cards
    flexWrap: 'wrap',               // Allows cards to drop to next line if they don't fit
    width: '100%',                  // Ensures the container takes full width
  },
  servicesContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '5%',             // Added some spacing for the text below it
  },
  cardText: {
    marginTop: 4,
    fontWeight: '600',
  },
  buttonPadding: {
    paddingBottom: 20,
    alignItems: 'center',
    color: '#fff'
  },
  button1: {
    width: width * 0.56,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
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
