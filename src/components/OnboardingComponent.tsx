import {View, Text, Image, GestureResponderEvent, StyleSheet} from 'react-native';
import React from 'react';
import ButtonComponent from './ButtonComponent';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  image: any;
};

const OnboardingComponent = ({title, onPress, image}: Props) => {
  return (

    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={image} style={styles.bannerImg}/>
      </View>
      <ButtonComponent title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  content: {
    top: '5%',
    alignItems: 'center',
    gap: 30,
  },
  bannerImg:{
    height:300,
    width:300,
  },
});

export default OnboardingComponent;
