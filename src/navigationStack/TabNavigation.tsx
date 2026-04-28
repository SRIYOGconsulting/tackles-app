import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Home from './Home';
import Services from './Services';
import Booking from './Booking';
import Faqs from './Faqs';
import Contact from './Contact';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#e4e4e4',
          height: 70,
          paddingBottom: 5,

          borderRadius: 50,          
          marginHorizontal: 10,      

          position: 'absolute',      
          marginBottom:15,
          paddingTop:7,

          boxShadow: '0 -6px 18px rgba(0, 0, 0, 0.12)',
        },

        tabBarActiveTintColor: '#008080',
        tabBarInactiveTintColor: '#000',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          fontFamily:"Poppins-Medium"
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName = 'questioncircle0';
          let size = 22;

          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 26 : 22;
          }

          else if (route.name === 'Services') {
            iconName = focused ? 'appstore1' : 'appstore-o';
            size = focused ? 26 : 22;
          }

          else if (route.name === 'BookingTab') {
            iconName = 'pluscircleo';
            size = 26;
          }

          else if (route.name === 'Request') {
            iconName = focused ? 'customerservice' : 'customerservice';
            size = focused ? 26 : 22;
          }

          else if (route.name === 'Contact') {
            iconName = 'phone';
            size = focused ? 26 : 22;
          }

          return (
            <AntDesign
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={Services} />

      <Tab.Screen
        name="BookingTab"
        component={Booking}
        options={{ tabBarLabel: 'Book' }}
      />

      <Tab.Screen name="Request" component={Faqs} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bookingIcon: {
    marginTop: -20,
  },
});

export default Tabs;