import { View } from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import { StyleSheet } from 'react-native';


const OnBoarding2 = ({ navigation }: { navigation: any }) => {
  return (

    <View style={styles.container}>
        <OnboardingComponent
          text="Reliable Service"
          title="Next"
          image={require('../../assets/image/onBoarding2.png')}
          onPress={() => navigation.navigate('OnBoarding3')}
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

export default OnBoarding2;
