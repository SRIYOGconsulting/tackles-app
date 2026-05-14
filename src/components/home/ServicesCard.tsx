import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  title: string;
  image: any;
  style?: any;
  onPress?: () => void; // 👈 added
};

const ServicesCard = ({ title, image, style, onPress }: Props) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    alignItems: 'center',
    height: hp('14%'),
    width: wp('27%'),
    marginTop: hp('1.2%'),
    marginHorizontal: wp('1.4%'),
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth:1,
    borderColor: '#7cbc7a',

  },
  image: {
    height: hp('9%'),
    width: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontSize: wp('3.5%'),
    fontWeight: '700',
    color: '#161616',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ServicesCard;
