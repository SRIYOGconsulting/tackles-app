import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PartnerScreen from '../Screens/PartnerScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Partner = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PartnerScreen" component={PartnerScreen} />
    </Stack.Navigator>
  );
};

export default Partner;
