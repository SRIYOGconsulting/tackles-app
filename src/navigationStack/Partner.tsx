import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PartnerScreen from '../Screens/PartnerScreen';
import AdminOtp from '../Screens/auth/AdminOtp';

type Props = {};

const Stack = createNativeStackNavigator();

const Partner = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PartnerScreen" component={PartnerScreen} />
      <Stack.Screen
        name="AdminOtp"
        component={AdminOtp}
      />
    </Stack.Navigator>
  );
};

export default Partner;
