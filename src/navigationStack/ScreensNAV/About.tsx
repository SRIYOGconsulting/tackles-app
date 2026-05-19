import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '../../Screens/AboutUs';

type Props = {};

const Stack = createNativeStackNavigator();

const About = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default About;
