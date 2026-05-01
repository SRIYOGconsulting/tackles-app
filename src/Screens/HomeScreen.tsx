import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderComponent from '../components/HeaderComponent';
import ServiceCard from '../components/home/ServicesCard';
import ProfessionalCard from '../components/home/ProfessionalCard';
import NumberBar from '../components/home/NumberBar';
import { HandMetal } from 'lucide-react-native';

import { ChevronLeft, ChevronRight } from 'lucide-react-native';

// ... inside your HomeScreen component
const professionals = [
  { id: '1', name: 'David Dell', image: require('../assets/image/homescreen/person1.png'), description: 'The lorem text the section that contains header with having open functionality.' },
  { id: '2', name: 'Rose Bush', image: require('../assets/image/homescreen/person5.png'), description: 'The lorem text the section that contains header with having open functionality.' },
  { id: '3', name: 'Jones Gail', image: require('../assets/image/homescreen/person3.png'), description: 'The lorem text the section that contains header with having open functionality.' },
];

// Move static data outside to prevent re-creation on every render
const TOP_SERVICES = [
  {
    id: '1',
    title: 'House Painting (Eco)',
    category: 'Design . Maintenance',
    rating: 4.6,
    joinedDate: 'Apr 21, 2024',
    location: 'Dubai, Marina',
    availability: 'Sun-Fri 9:30 AM - 11 PM',
    price: 7,
    imageUri: require('../assets/image/homescreen/painting1.jpg'),
  },
  {
    id: '2',
    title: 'Premium Plumbing',
    category: 'Maintenance',
    rating: 4.8,
    joinedDate: 'Jan 10, 2024',
    location: 'Downtown Dubai',
    availability: 'Sat-Thu 8:00 AM - 10 PM',
    price: 12,
    imageUri: require('../assets/image/homescreen/pumbling1.jpg'),
  },
  {
    id: '3',
    title: 'AC Repair',
    category: 'Maintenance',
    rating: 4.9,
    joinedDate: 'Feb 15, 2024',
    location: 'JLT, Dubai',
    availability: '24/7 Service',
    price: 15,
    imageUri: require('../assets/image/homescreen/pumbling1.jpg'),
  },
];

// This interval should match: Card Width (80%) + Horizontal Margins (4%)
  const SNAP_INTERVAL = wp('84%');

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.container}>
          {/* Hero Banner */}
          <Image
            source={require('../assets/image/homescreen/banner1.png')}
            style={styles.banner}
            resizeMode="cover"
          />

          {/* Absolute Header */}
          <View style={styles.headerWrapper}>
            <HeaderComponent style={styles.headerPadding} />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Tackles | Dubai</Text>
            <Text style={styles.subtitle}>Professional & Reliable Services</Text>

            <View style={styles.bannerSpacer} />

            {/* Horizontal Service Slider */}
            <Text style={styles.sectionTitle}>Top Services</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={wp('100%')} // Snaps exactly to screen width
              snapToAlignment="center"
              decelerationRate="fast"
              disableIntervalMomentum={true}
              scrollEventThrottle={16}
            >
              {TOP_SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                  onBookingPress={() =>
                    navigation.navigate('Booking', { serviceId: service.id })
                  }
                />
              ))}
            </ScrollView>

            <View style={styles.slideHintContainer}>
              <View style={styles.line} />
              <View style={styles.hintContent}>
                <HandMetal size={14} color="#FF7A30" style={styles.hintIcon} />
                <Text style={styles.hintText}>SLIDE TO VIEW MORE</Text>
              </View>
              <View style={styles.line} />
            </View>

            {/* Professionals Section */}
            <Text style={styles.sectionTitle}>Top Professionals</Text>

            <View style={styles.proSliderWrapper}>
              {/* Left Arrow */}
              <TouchableOpacity style={styles.sideArrow}>
                <ChevronLeft size={24} color="#4169E1" />
              </TouchableOpacity>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.proScrollContent}
              >
                {professionals.map((pro) => (
                  <ProfessionalCard
                    key={pro.id}
                    name={pro.name}
                    image={pro.image}
                    description={pro.description}
                  />
                ))}
              </ScrollView>

              {/* Right Arrow */}
              <TouchableOpacity style={styles.sideArrow}>
                <ChevronRight size={24} color="#4169E1" />
              </TouchableOpacity>
            </View>

            {/* Dot Pagination Aesthetic */}
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            {/* Bottom Navigation / Info Bar */}
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
    backgroundColor: '#F8F9FA',
  },
  banner: {
    width: '100%',
    height: hp('34%'),
    position: 'absolute',
    borderRadius: 25,
    top: hp('8%'), // Adjusted based on hp to be responsive
    alignSelf: 'center',
    zIndex: 1,
  },
  bannerSpacer: {
    height: hp('30%'),
  },
  headerWrapper: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: wp('4%'),
    top: Platform.OS === 'ios' ? hp('5%') : hp('2%'),
    zIndex: 10,
  },
  headerPadding: {
    paddingHorizontal: wp('4%'),
  },
  content: {
    paddingTop: hp('2.5%'),
  },
  title: {
    fontSize: wp('6.5%'),
    color: '#008080',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: hp('12%'),
    zIndex: 2,
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#333',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    zIndex: 2,
  },
  sectionTitle: {
    fontSize: wp('5%'),
    color: '#000',
    fontWeight: '900',
    marginVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    paddingHorizontal: wp('4%'),
  },
  numberBarContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('5%'),
  },
  slideHintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: wp('10%'),
    opacity: 0.8,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0', // Subtle light gray line
  },
  hintContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  hintIcon: {
    marginRight: 6,
  },
  hintText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#999',
    letterSpacing: 1.5, // High letter spacing for aesthetic "Apple-style" look
    textTransform: 'uppercase',
  },
  proSliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  proScrollContent: {
    paddingVertical: 10,
  },
  sideArrow: {
    padding: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#dddddd',
  },
  activeDot: {
    backgroundColor: '#4169E1',
    width: 7, // Slightly larger for active state
    aspectRatio:1,
  },
});

export default HomeScreen;