import {View} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import {StyleSheet, Platform} from 'react-native';

const OnBoarding1 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <OnboardingComponent
        text="Professional Service"
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
    backgroundColor: '#ffffff',

  },
});

export default OnBoarding1;
