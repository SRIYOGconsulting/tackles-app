import {View, Text, Image, GestureResponderEvent} from 'react-native';
import React from 'react';
import ButtonComponent from './ButtonComponent';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  image: any;
  text: string;
};

const OnboardingComponent = ({title, onPress, image, text}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 40,
        backgroundColor: '#fff',
      }}>
      <View style={{top: '16%', alignItems: 'center', gap: 40}}>
        <Image source={image} />
        <Text style={{fontSize: 20, fontWeight: '400'}}>{text}</Text>
      </View>
      <ButtonComponent title={title} onPress={onPress} />
    </View>
  );
};

export default OnboardingComponent;
