import { View, Text, Pressable } from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding1 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>

      {/* Skip Button */}
      <Pressable
        style={styles.skipContainer}
        onPress={async () => {
          await AsyncStorage.setItem('hasSeenOnboarding', 'true');
          navigation.replace('Main');
        }}>
        <Text style={styles.skipbutton}>SKIP</Text>
      </Pressable>

      <Text style={styles.title}>
        Welcome to Tackles
      </Text>

      <Text style={styles.subtitle}>
        From Repairs to Refresh – We’ve Got Your Home Covered.
      </Text>

      <OnboardingComponent
        title="Next"
        image={require('../../assets/image/onBoarding1.png')}
        onPress={() => {
          navigation.navigate('OnBoarding2');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipContainer: {
    position: 'absolute',
    right: 21,
    top: 55,
    zIndex: 10,
  },

  skipbutton: {
    fontSize: 13,
    fontWeight: '600',
    color: 'purple',
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

export default OnBoarding1;
