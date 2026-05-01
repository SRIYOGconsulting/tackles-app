import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet} from 'react-native';
import Booking from './Booking';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import HomeIcon from '../assets/icons/Home.svg';
import HomeActiveIcon from '../assets/icons/HomeActive.svg';
import ServicesIcon from '../assets/icons/Service.svg';
import BookingIcon from '../assets/icons/Book.svg';
import FaqsIcon from '../assets/icons/Faq.svg';
import ContactIcon from '../assets/icons/Contact.svg';
import ServiceActiveIcon from '../assets/icons/ServiceActive.svg';
import BookActiveIcon from '../assets/icons/BookActive.svg'
import FaqsActiveIcon from '../assets/icons/FaqActive.svg';
import ContactActiveIcon from '../assets/icons/ContactActive.svg';
import Faqs from './Faqs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '	hsl(0, 0%, 90%)',
          justifyContent: 'center', // Center tab items vertically
          alignItems: 'center',
          height: 65,
          borderRadius:25,
          boxShadow: "0 -3px 30px rgba(0, 0, 0, 0.4)"
        },
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeActiveIcon width={39} height={39} style={styles.ActiveIcon}/>
            ) : (
              <HomeIcon width={35} height={35} style={styles.NIcon}/>
            );
          } else if (route.name === 'Services') {
            return focused ? (
              <ServiceActiveIcon width={42} height={42} style={styles.ActiveIcon}/>
            ) : (
              <ServicesIcon width={38} height={38} style={styles.NIcon}/>
            );
          } else if (route.name === 'BookingTab') {
            return focused ? (
              <BookActiveIcon width={50} height={50} style={styles.bookingIcon} />
            ) : (
              <BookingIcon width={50} height={50} style={styles.bookingIcon} />
            );
          } else if (route.name === 'Request') {
            return focused ? (
              <FaqsActiveIcon width={42} height={42} style={styles.ActiveIcon}/>
            ) : (
              <FaqsIcon width={38} height={38} style={styles.NIcon}/>
            );
          } else if (route.name === 'Contact') {
            return focused ? (
              <ContactActiveIcon width={35} height={35} style={styles.ActiveIcon}/>
            ) : (
              <ContactIcon width={31} height={31} style={styles.NIcon}/>
            );
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#4B4B4B',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="BookingTab"
        component={Booking}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Request"
        component={Faqs}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bookingIcon: {
    marginTop: 16,
  },
  NIcon:{
    marginTop:14,
  
  },
  ActiveIcon:{
    marginTop:8,
  },
});
export default Tabs;
