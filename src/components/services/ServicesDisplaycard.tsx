import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  name: string;
  words: string;
  image: any;
  onPress?: any;
  style?: any;
  textStyle?: any;
  navigation?: any;
  description?: string;
  question?: string;
  answer?: string;
  id?: number;
};

const ServicesDisplaycard = ({
  name,
  words,
  image,
  onPress,
  style,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, style]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={[styles.title, textStyle]}>{name}</Text>
      <Text style={[styles.words, textStyle]}>{words}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: hp(1.5),
    borderRadius: 13,
    overflow: 'hidden',
    backgroundColor: '#fff',

    height: hp(23), 

   boxShadow:'0px 0px 4px rgba(124, 188, 122,0.7)'
  },

  image: {
    width: '100%',
    height: hp(14),
  },

  title: {
    fontSize: wp(3.7),
    fontWeight: '600',
    marginTop: hp(1.2),
    color: '#000',
    paddingHorizontal: 11,
  },

  words: {
    fontSize: wp(3),
    fontWeight: '500',
    color: 'grey',
    paddingHorizontal: 11,
    marginTop: hp(0.5),

    flexShrink: 1, // prevents overflow
  },
});

export default ServicesDisplaycard;
