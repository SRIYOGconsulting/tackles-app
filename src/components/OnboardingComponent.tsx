import {View, Text, Image, GestureResponderEvent, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={image} />
        <Text style={styles.text}>{text}</Text>
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
    top: '16%',
    alignItems: 'center',
    gap: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});

export default OnboardingComponent;
