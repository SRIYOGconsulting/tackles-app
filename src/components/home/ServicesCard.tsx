import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

type Props = {title: string; image: any; style?: any};

const ServicesCard = ({title, image, style}: Props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={[styles.image, style]} />
      <View style={styles.divider} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 16,
    alignItems: 'center',
    height: height * 0.158, // 18% of screen height
    width: width * 0.26, // 25% of screen width
    marginTop: height * 0.006,
    marginHorizontal: width * 0.0,
    backgroundColor: '#fff',
  },
  image: {
    height: height * 0.1,
    width: width * 0.22,
    resizeMode: 'contain',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#4B4B4B',
    width: '75%',
    marginVertical: height * 0.01,
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: '400',
    color: '#4B4B4B',
    textAlign: 'center',
  },
});

export default ServicesCard;
