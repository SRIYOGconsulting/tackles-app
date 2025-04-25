import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import OptScreen from '../Screens/otp/OptScreen';
import VerifiedScreen from '../Screens/otp/VerifiedScreen';
import HomeScreen from '../Screens/HomeScreen';
import SingleScreen from '../Screens/SingleScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Home = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OTP" component={OptScreen} />
      <Stack.Screen name="Verify" component={VerifiedScreen} />
      <Stack.Screen name="SingleScreen" component={SingleScreen} />
    </Stack.Navigator>
  );
};

export default Home;
