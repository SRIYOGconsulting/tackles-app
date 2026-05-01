import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

type Props = {name: string; image: any};

const SliderCard = ({name, image}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tackels | San Francisco</Text>
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
    top: '35%', // Adjusted a bit to be better centered
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: width * 0.04,
    fontWeight: '500',
    marginVertical: height * 0.01,
    color: '#fff',
    textAlign: 'center',
  },
  name: {
    fontSize: width * 0.045,
    fontWeight: '400',
    color: '#fff',
  },
});

export default SliderCard;
