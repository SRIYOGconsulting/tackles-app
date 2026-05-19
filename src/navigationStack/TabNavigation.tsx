import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Platform } from 'react-native';

import Booking from './Booking';
import Home from './ScreensNAV/Home';
import Services from './ScreensNAV/Services';
import About from './ScreensNAV/About';
import Contact from './ScreensNAV/Contact';

import Career from './ScreensNAV/Career';
import Glossary from './ScreensNAV/Glossary'
import Partner from './ScreensNAV/Partner';
import Faqs from './ScreensNAV/Faqs';
import AdminNavigation from './authNAV/AdminNavigation'

import HomeIcon from '../assets/icons/Home.png';
import HomeActiveIcon from '../assets/icons/HomeActive.png';
import ServicesIcon from '../assets/icons/Service.png';
// import BookingIcon from '../assets/icons/Book.png';
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
          height: Platform.OS === 'android' ? 82 : 90,
          paddingTop: 10,
          paddingBottom: Platform.OS === 'android' ? 12 : 25,
          borderTopWidth: 0,
          elevation: 12,
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
                style={[styles.ActiveIcon, { width: 35, height: 35 }]}
              />
            ) : (
              <Image
                source={ServicesIcon}
                style={[styles.NIcon, { width: 35, height: 35 }]}
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
                source={BookActiveIcon}
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
      <Tab.Screen name="Request" component={About} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: '' }} />
      <Tab.Screen
        name="Partner"
        component={Partner}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />

      <Tab.Screen
        name="Faqs"
        component={Faqs}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />

      <Tab.Screen
        name="Career"
        component={Career}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />

      <Tab.Screen
        name="Glossary"
        component={Glossary}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />

      <Tab.Screen
        name="AdminLogin"
        component={AdminNavigation}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
            tabBarStyle: { display: 'none' },
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  NIcon: {
    width: 30,
    height: 30,
    marginTop: 2,
  },

  ActiveIcon: {
    width: 37,
    height: 37,
    marginTop: 2,
  },

  bookingIcon: {
    width: 62,
    height: 62,
    marginBottom: 38,
    backgroundColor: '#fff',
    borderRadius: 100,


    // Android shadow
    boxShadow: '0px 0px 2px 2px #fff',

  },
});

export default Tabs;
