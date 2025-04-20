import {View, Text} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';

type Props = {};

const OnBoarding3 = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#fff',
      }}>
      <OnboardingComponent
        text="Express Service"
        title="Home"
        image={require('../../assets/image/onBoarding3.png')}
        onPress={() => {
          navigation.navigate('Tab');
        }}
      />
    </View>
  );
};

export default OnBoarding3;
