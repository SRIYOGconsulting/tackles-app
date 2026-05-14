import { View, Text } from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding3 = ({ navigation }: { navigation: any }) => {

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets, Begin!</Text>

      <Text style={styles.subtitle}>
        Fast, reliable, and professional services—whenever you need them.
      </Text>

      <OnboardingComponent
        title="Home"
        image={require('../../assets/image/onBoarding3.png')}
        onPress={finishOnboarding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    paddingTop: 95,
    paddingLeft: 21,
    fontSize: 25,
    fontWeight: '800',
    paddingBottom: 12,
    color: 'green',
  },
  subtitle: {
    paddingHorizontal: 21,
    fontSize: 16,
    lineHeight: 22,
    color: 'green',
  },
});

export default OnBoarding3;
