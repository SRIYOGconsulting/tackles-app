import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import OnBoarding1 from '../Screens/onBoarding/OnBoarding1';
import OnBoarding2 from '../Screens/onBoarding/OnBoarding2';
import OnBoarding3 from '../Screens/onBoarding/OnBoarding3';
import Tabs from './TabNavigation';

type Props = {};
const Stack = createNativeStackNavigator();

const RootNavigator = (_props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* No Tabs for Splash and Onboarding */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />

      {/* Main Stack with Tabs */}
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
