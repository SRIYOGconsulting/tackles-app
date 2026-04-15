import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from '../Screens/ContactScreen';

import AdminLogin from '../Screens/auth/AdminLogin';
import ViewBooking from '../Screens/ViewBooking';
import SingleBooking from '../SingleBooking';

type Props = {};

const Stack = createNativeStackNavigator();

const Contact = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="Login" component={AdminLogin} />
      <Stack.Screen name="ViewBooking" component={ViewBooking} />
      <Stack.Screen name="SingleBooking" component={SingleBooking} />
    </Stack.Navigator>
  );
};

export default Contact;
