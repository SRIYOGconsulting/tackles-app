import {View} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import {StyleSheet} from 'react-native';

const OnBoarding3 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <OnboardingComponent
        text="Express Service"
        title="Home"
        image={require('../../assets/image/onBoarding3.png')}
        onPress={() => {
          navigation.replace('Main');
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
});

export default OnBoarding3;
