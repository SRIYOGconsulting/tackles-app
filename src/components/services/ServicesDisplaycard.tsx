import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  name: string;
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
  image,
  onPress,
  style,
  textStyle,
  navigation,
  question,
  answer,
  description,
  id,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, style]}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={[styles.title, textStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // Margin and padding adjusted for responsiveness
    marginBottom: hp(0.5), // Responsive margin-bottom
    marginHorizontal: wp(0), // Responsive margin-left and margin-right
  },
  image: {
    width: wp(42), // Image width as 42% of screen width
    height: hp(14), // Image height as 20% of screen height
    borderRadius: 8,
    alignSelf: 'center', // Center the image horizontally
  },
  title: {
    fontSize: wp(4.2), // Responsive font size for title
    fontWeight: '600',
    marginTop: hp(1), // Responsive margin-top
    textAlign: 'center',
    color: '#000',
  },
});

export default ServicesDisplaycard;
