import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlossaryScreen from '../Screens/GlossaryScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Glossary = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GlossaryScreen" component={GlossaryScreen} />
    </Stack.Navigator>
  );
};

export default Glossary;
