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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


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
  console.log(service); // ✅ correct

  // Shuffle services for the "Other Services" section
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // this is for dummy data in the Data.ts
  const excludedIds = [6.1, 6.2];

  const otherServices = shuffleArray(
    servicesData2.filter(item => !excludedIds.includes(item.id)),
  ).slice(0, 2);

const formatDescription = (text:any) => {
  if (!text) return "";

  const words = text.split(" ");
  const result = [];
  let currentSegment = [];
  let wordCount = 0;
  const interval = 20;

  for (let i = 0; i < words.length; i++) {
    currentSegment.push(words[i]);
    wordCount++;

    // Check if we passed the 40-word mark and found a sentence end
    if (wordCount >= interval && words[i].endsWith(".")) {
      result.push(currentSegment.join(" "));
      currentSegment = []; // Reset for the next block
      wordCount = 0;       // Reset counter
    }
  }

  // Push any remaining words that didn't reach the last interval
  if (currentSegment.length > 0) {
    result.push(currentSegment.join(" "));
  }

  return result.join("\n\n");
};

  return (

    <ScrollView style={styles.scrollView}>
      <HeaderComponent style={styles.header} />
      <View style={styles.headerline}/>
      <View style={styles.container}>
       {/* <Text style={[styles.title, { fontSize: scaleFont(21) }]}> */}
          {/* {service.name} */}
        {/* </Text> */}
        <View style={styles.imageContainer}>
          <Image source={service.image} style={styles.image} />
        </View>
        <Text style={[styles.subtitle, { fontSize: scaleFont(17) }]}>
           {service.name} services in San Francisco
        </Text>
        <Text style={[styles.description, { fontSize: scaleFont(14) }]}>
          {formatDescription(service.description)}
        </Text>
        <Text style={[styles.question, { fontSize: scaleFont(15) }]}>
          {service.question}
        </Text>
        <Text style={[styles.answer, { fontSize: scaleFont(14) }]}>
          {service.answer}
        </Text>

        <View style={styles.buttonPadding}>
          <Button
            style={styles.button1}
            textStyle={{ color: 'white', textAlign: 'center', }}
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

        <Text style={[styles.otherServicesTitle, { fontSize: scaleFont(18) }]}>
          Related Services
        </Text>
        <View style={styles.servicesContainer}>
          {otherServices.map(item => (
            <ServicesDisplaycard
              style={{ width: '48%' }}
              words={item.words}
              key={item.id}
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
    </ScrollView >

  );
};

const styles = StyleSheet.create({
  header: {
   marginTop:hp('2.01%'),
    paddingHorizontal:17
  },
  headerline:{
    paddingTop:16,
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
  imageContainer: {
    width: '100%',
    height: height * 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    boxShadow:'0px 0px 3px rgba(0, 0, 0,0.4)',
    marginTop:5,
    marginBottom: 15
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // fills perfectly
  },
  title: {
    color: '#064E3B',
    fontWeight: '900',
    marginBottom: "4%"
  },
  subtitle: {
    color: '#064E3B',
    fontWeight: '700',
    marginBottom: '4%'
  },
  description: {
    fontWeight: '500',
  },
  description2: {
    fontWeight: '500',
    marginBottom: '10%',
  },
  question: {
    fontWeight: '800',
    marginTop: '3%',
    marginBottom:'2%'
  },
  answer: {
    fontWeight: '500',
    marginBottom: '4%'
  },
  otherServicesTitle: {
    color: '#064E3B',
    fontWeight: '900',
    marginTop: '1.8%',
    marginBottom: '3%',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Keeps even spacing between cards
    flexWrap: 'wrap',               // Allows cards to drop to next line if they don't fit
    width: '100%',
    marginBottom: '25%',               // Ensures the container takes full width
  },
  servicesContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '5%',             // Added some spacing for the text below it
  },

  buttonPadding: {
    paddingBottom: 20,
    alignItems: 'center',
    color: '#fff',
    marginTop:14
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
