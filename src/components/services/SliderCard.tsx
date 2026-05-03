import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

type Props = {name: string; image: any};

const SliderCard = ({name, image}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tackles | San Francisco</Text>
        <Text style={styles.subtitle}>
          Professional & Reliable Services in San Francisco
        </Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.28, // 40% of the screen height
  },
  textContainer: {
    position: 'absolute',
    top: '30%', // Adjusted a bit to be better centered
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: width * 0.04, // Responsive font size
    fontWeight: '900',
    color: '#000',
    paddingBottom:2

  },
  subtitle: {
    fontSize: width * 0.036,
    fontWeight: '500',
    marginBottom: height * 0.018,
    color: '#000',
    textAlign: 'center',
  },
  name: {
    fontSize: width * 0.044,
    fontWeight: '600',
    color: '#000',
  },
});

export default SliderCard;
