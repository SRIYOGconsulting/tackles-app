import {View, Text} from 'react-native';
import React from 'react';
import OnboardingComponent from '../../components/OnboardingComponent';
import {StyleSheet} from 'react-native';

const OnBoarding2 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >
              What can you do?
            </Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, distinctio nisi, iste porro 
            </Text>
      <OnboardingComponent
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
    title: {
    paddingTop:95,
    paddingLeft:21,
    fontSize:25,
    fontWeight:"800",
    paddingBottom:12,
    color:"green"
  },
  subtitle: {
    paddingHorizontal:21,
    fontSize:15,
    lineHeight:22,
    color:"green"

  }
});

export default OnBoarding2;
