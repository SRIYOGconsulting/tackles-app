import {View, Text} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const OnBoarding1 = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#fff',
      }}>
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

export default OnBoarding1;
