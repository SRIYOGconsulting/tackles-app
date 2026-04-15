import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import AdminOtp from '../Screens/auth/AdminOtp';
import AdminOtpVerify from '../Screens/auth/AdminOtpVerify';

type Props = {};

const Stack = createNativeStackNavigator();

const Booking = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceBookingScreen"
        component={ServiceBookingScreen}
      />
      <Stack.Screen name="AdminOtp" component={AdminOtp} />
      <Stack.Screen name="AdminOtpVerify" component={AdminOtpVerify} />
    </Stack.Navigator>
  );
};

export default Booking;
