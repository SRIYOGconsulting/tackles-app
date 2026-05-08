import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {title: string; image: any; style?: any};

const ProfessionalCard = ({title, image, style}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  image: {
    width: wp('18%'), // Default image width (can be overridden with prop)
    height: wp('18%'), // Square image
    resizeMode: 'contain',
    borderRadius:100,
    elevation:3,
    borderWidth:1,
    borderColor:'hsl(0, 0%, 50%)'
  },
  title: {
    marginTop: hp('1%'),
    fontWeight: '600',
    fontSize: wp('3.1%'), // Responsive font size
    color: '#000',
    textAlign: 'center',
  },
});

export default ProfessionalCard;