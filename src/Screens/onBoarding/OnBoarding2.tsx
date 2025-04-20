import {View, Text} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';

type Props = {};

const OnBoarding2 = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#fff',
      }}>
      <OnboardingComponent
        text="Reliable Service"
        title="Next"
        image={require('../../assets/image/onBoarding2.png')}
        onPress={() => navigation.navigate('OnBoarding3')}
      />
    </View>
  );
};

export default OnBoarding2;
