import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './TabNavigation';
import SingleScreen from '../Screens/SingleScreen';
import VerifiedScreen from '../Screens/otp/VerifiedScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Navigation = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tabs} />

      <Stack.Screen name="SingleScreen" component={SingleScreen} />
      <Stack.Screen name="Verify" component={VerifiedScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
