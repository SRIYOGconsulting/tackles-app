import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

import SplashScreen from '../Screens/SplashScreen';
import OnBoarding1 from '../Screens/onBoarding/OnBoarding1';
import OnBoarding2 from '../Screens/onBoarding/OnBoarding2';
import OnBoarding3 from '../Screens/onBoarding/OnBoarding3';
import Tabs from './TabNavigation';
import Booking from './Booking';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string>('Splash');

  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem('hasSeenOnboarding');

      if (seen === 'true') {
        setInitialRoute('Main');
      } else {
        setInitialRoute('Splash');
      }

      setLoading(false);
    };

    checkOnboarding();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />

      <Stack.Screen name="Main" component={DrawerNavigation} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

export default RootNavigator;