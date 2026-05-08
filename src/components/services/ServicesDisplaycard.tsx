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
    // Margin and padding adjusted for responsiveness
    marginBottom: hp(0.5), // Responsive margin-bottom
    marginHorizontal: wp(0), // Responsive margin-left and margin-right
    borderRadius:13,
    paddingBottom:30,
    maxHeight:195,
    boxShadow:'0px 0px 4px #7cbc7a',
    overflow:'hidden'
  },
  image: {
    width: '100%', // Image width as 42% of screen width
    height: hp(14), // Image height as 20% of screen height
    borderTopRightRadius:13,
    borderTopLeftRadius:13,
    alignSelf: 'center', // Center the image horizontally,
  },
  title: {
    fontSize: wp(3.8), // Responsive font size for title
    fontWeight: '600',
    marginTop: hp(1.4), // Responsive margin-top
    textAlign: 'left',
    color: '#000',
    paddingLeft:11
  },
  words:{
    fontSize: wp(3.0), // Responsive font size for title
    fontWeight: '600',
    textAlign: 'left',
    color: 'grey',
    paddingLeft:11,
    marginTop:hp(0.3)
  }
});

export default ServicesDisplaycard;
