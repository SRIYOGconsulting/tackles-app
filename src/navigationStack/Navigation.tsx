import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';

import Tabs from './TabNavigation';
import OnBoarding1 from '../Screens/onBoarding/OnBoarding1';
import OnBoarding2 from '../Screens/onBoarding/OnBoarding2';
import OnBoarding3 from '../Screens/onBoarding/OnBoarding3';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

type Props = {};

const RootStack = createNativeStackNavigator();

const Navigation = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="OnBoarding1" component={OnBoarding1} />
            <RootStack.Screen name="OnBoarding2" component={OnBoarding2} />
            <RootStack.Screen name="OnBoarding3" component={OnBoarding3} />
            <RootStack.Screen name="Tab" component={Tabs} />
            <RootStack.Screen name="Contact" component={ContactScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigation;
