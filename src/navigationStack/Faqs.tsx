import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FaqsScreen from '../Screens/FaqsScreen';
import FaqsSingle from '../FaqsSingle';

type Props = {};

const Stack = createNativeStackNavigator();

const Faqs = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FaqsScreen" component={FaqsScreen} />
      <Stack.Screen name="FAQsSingle" component={FaqsSingle} />
    </Stack.Navigator>
  );
};

export default Faqs;
