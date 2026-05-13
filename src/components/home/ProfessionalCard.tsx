import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = { title: string; subtitle: string; image: any; style?: any };

const ProfessionalCard = ({ title, subtitle, image, style }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

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
    resizeMode: 'cover',
    borderRadius: 100,
    borderColor: 'hsl(0, 0%, 50%)',
    elevation: 3,
  },
  title: {
    marginTop: hp('1%'),
    fontWeight: '600',
    fontSize: wp('3.5%'), // Responsive font size
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: hp('0.1%'),
    fontWeight: '500',
    fontSize: wp('2.3%'), // Responsive font size
    color: '#000',
    textAlign: 'center',
    width: wp('20%')
  },
});

export default ProfessionalCard;