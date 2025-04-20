import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';
import {Image, StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import FaqsScreen from '../Screens/FaqsScreen';
import ServicesScreen from '../Screens/ServicesScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#D9D9D9', // Example background color
          justifyContent: 'center', // Center tab items vertically
          alignItems: 'center',

          height: 52,
          paddingTop: 7,
        },

        tabBarIcon: ({focused}) => {
          let iconSource;
          let iconSize;
          if (route.name === 'HomeScreen') {
            iconSize = focused ? 24 : 24;
            iconSource = focused
              ? require('../assets/image/TabIcon/1.png') // Image for active state
              : require('../assets/image/TabIcon/1.png'); // Image for inactive state
          } else if (route.name === 'ServicesScreen') {
            iconSize = focused ? 24 : 24;
            iconSource = focused
              ? require('../assets/image/TabIcon/2.png')
              : require('../assets/image/TabIcon/2.png');
          } else if (route.name === 'ServiceBookingScreen') {
            iconSize = focused ? 40 : 40;
            iconSource = focused
              ? require('../assets/image/TabIcon/3.png')
              : require('../assets/image/TabIcon/3.png');
          } else if (route.name === 'FaqsScreen') {
            iconSize = focused ? 24 : 24;
            iconSource = focused
              ? require('../assets/image/TabIcon/4.png')
              : require('../assets/image/TabIcon/4.png');
          } else if (route.name === 'ContactScreen') {
            iconSize = focused ? 24 : 24;
            iconSource = focused
              ? require('../assets/image/TabIcon/5.png')
              : require('../assets/image/TabIcon/5.png');
          }

          return (
            <Image
              source={iconSource}
              style={{width: iconSize, height: iconSize}}
            />
          );
        },

        tabBarLabel: '',
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ServicesScreen" component={ServicesScreen} />

      <Tab.Screen
        name="ServiceBookingScreen"
        component={ServiceBookingScreen}
      />
      <Tab.Screen name="FaqsScreen" component={FaqsScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {height: 200},
});
export default Tabs;
