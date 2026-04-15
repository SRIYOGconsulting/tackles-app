import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServicesScreen from '../Screens/ServicesScreen';
import SingleScreen from '../Screens/SingleScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Services = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      <Stack.Screen name="SingleScreen" component={SingleScreen} />
    </Stack.Navigator>
  );
};

export default Services;
