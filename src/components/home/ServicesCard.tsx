import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

type Props = {
  title: string;
  image: any;
  style?: any;
  onPress?: () => void; // 👈 added
};

const ServicesCard = ({ title, image, style, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    alignItems: 'center',

    height: height * 0.142,
    width: width * 0.27,

    marginTop: height * 0.012,
    marginHorizontal: width * 0.014,

    backgroundColor: '#fff',
    overflow: 'hidden',
    boxShadow: '0px 0px 2px #7cbc7a',
  },
  image: {
    height: height * 0.09,
    width: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontSize: width * 0.035,
    fontWeight: '700',
    color: 'hsl(0, 0%, 9%)',
    textAlign: 'center',
    marginTop: 13,
  },
});

export default ServicesCard;