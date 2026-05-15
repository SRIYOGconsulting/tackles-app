import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CareerScreen from '../Screens/CareerScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Career = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AboutScreen" component={CareerScreen} />
    </Stack.Navigator>
  );
};

export default Career;
