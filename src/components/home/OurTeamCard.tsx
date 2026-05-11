import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
    title: string;
    suBTitle: string;
    image: any; 
    style?: any};

const OurTeamCard = ({title,suBTitle, image, style}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.image, style]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.suBTitle}>{suBTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: hp('1%'), 
    width:'36%',   // Responsive vertical margin
  },
  image: {
    width: wp('18%'), // Default image width (can be overridden with prop)
    height: wp('18%'), // Square image
    resizeMode: 'contain',
  },
  title: {
    marginTop: hp('1%'),
    fontWeight: '600',
    fontSize: wp('3.5%'), // Responsive font size
    color: '#000',
    textAlign: 'center',
  },
  suBTitle:{
    marginTop: hp('0.1%'),
    fontWeight: '400',
    fontSize: wp('2.8%'), // Responsive font size
    color: 'hsl(0, 0%, 25%)',
    textAlign: 'center',
    width:'80%',
  },
});

export default OurTeamCard;