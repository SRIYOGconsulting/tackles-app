import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {title: string; image: any; style?: any};

const ServicesCard = ({title, image, style}: Props) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        alignItems: 'center',
        height: 130,
        width: 102,
      }}>
      <Image
        source={image}
        style={[{height: 102, width: 102, top: -4}, style]}
      />
      <Text
        style={{
          borderBottomWidth: 1,
          color: '#4B4B4B',
          width: '75%',
          top: -30,
        }}></Text>
      <Text style={{fontSize: 16, top: -20, fontWeight: '400'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServicesCard;
