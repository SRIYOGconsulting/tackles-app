import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import Booking from './Booking';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Faqs from './Faqs';

import HomeIcon from '../assets/icons/Home.png';
import HomeActiveIcon from '../assets/icons/HomeActive.png';
import ServicesIcon from '../assets/icons/Service.png';
import BookingIcon from '../assets/icons/Book.png';
import FaqsIcon from '../assets/icons/Faq.png';
import ContactIcon from '../assets/icons/Contact.png';

import ServiceActiveIcon from '../assets/icons/ServiceActive.png';
import BookActiveIcon from '../assets/icons/BookActive.png';
import FaqsActiveIcon from '../assets/icons/FaqActive.png';
import ContactActiveIcon from '../assets/icons/ContactActive.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#D9D9D9',
          justifyContent: 'center',
          alignItems: 'center',
          height: 52,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return focused ? (
              <Image
                source={HomeActiveIcon}
                style={[styles.ActiveIcon, { width: 30, height: 30 }]}
              />
            ) : (
              <Image
                source={HomeIcon}
                style={[styles.NIcon, { width: 30, height: 30 }]}
              />
            );
          } else if (route.name === 'Services') {
            return focused ? (
              <Image
                source={ServiceActiveIcon}
                style={[styles.ActiveIcon, { width: 33, height: 33 }]}
              />
            ) : (
              <Image
                source={ServicesIcon}
                style={[styles.NIcon, { width: 35, height: 33 }]}
              />
            );
          } else if (route.name === 'BookingTab') {
            return focused ? (
              <Image
                source={BookActiveIcon}
                style={[styles.bookingIcon, { width: 50, height: 50 }]}
              />
            ) : (
              <Image
                source={BookingIcon}
                style={[styles.bookingIcon, { width: 50, height: 50 }]}
              />
            );
          } else if (route.name === 'Request') {
            return focused ? (
              <Image
                source={FaqsActiveIcon}
                style={[styles.ActiveIcon, { width: 34, height: 34 }]}
              />
            ) : (
              <Image
                source={FaqsIcon}
                style={[styles.NIcon, { width: 34, height: 34 }]}
              />
            );
          } else if (route.name === 'Contact') {
            return focused ? (
              <Image
                source={ContactActiveIcon}
                style={[styles.ActiveIcon, { width: 28, height: 28 }]}
              />
            ) : (
              <Image
                source={ContactIcon}
                style={[styles.NIcon, { width: 28, height: 28 }]}
              />
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

      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Services" component={Services} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="BookingTab" component={Booking} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Request" component={Faqs} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: '' }} />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  NIcon: {
    width: 30,
    height: 30,
    marginTop: 14,
  },
  ActiveIcon: {
    width: 37,
    height: 37,
    marginTop: 14,
  },
  bookingIcon: {
    width: 48,
    height: 48,
    marginTop: 14,
  },
});

export default Tabs;