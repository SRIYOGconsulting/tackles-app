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
          let icon;
          let iconStyle = focused ? styles.activeIcon : styles.icon;
          let iconStyle1 = focused ? styles.activeIcon : styles.icon;

          if (route.name === 'Home') {
            icon = focused ? HomeActiveIcon : HomeIcon;
          }
          else if (route.name === 'Services') {
            icon = focused ? ServiceActiveIcon : ServicesIcon;
          }
          else if (route.name === 'BookingTab') {
            icon = focused ? BookActiveIcon : BookingIcon;

            //  SPECIAL STYLE FOR BOOKING ICON
            iconStyle = styles.bookingiconCSS;
          }
          else if (route.name === 'Request') {
            icon = focused ? FaqsActiveIcon : FaqsIcon;
          }
          else if (route.name === 'Contact') {
            icon = focused ? ContactActiveIcon : ContactIcon;
            iconStyle1 = styles.contactIconCSS;
          }

          return <Image source={icon} style={iconStyle} />;
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
  icon: {
    width: 35,
    height: 35,
    marginTop: 14,
  },
  activeIcon: {
    width: 37,
    height: 37,
    marginTop: 14,
  },
  bookingiconCSS: {
    width: 48,
    height: 48,
    marginTop: 14,
  },
  contactIconCSS:{
    width: 10,
    height: 10,
    marginTop: 14,
  },
});

export default Tabs;