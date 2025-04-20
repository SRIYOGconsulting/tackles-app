import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {title: string; image: any};

const ProfessionalCard = ({title, image}: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={image} />
      <Text style={{marginVertical: 4, fontWeight: 400, fontSize: 14}}>
        {title}
      </Text>
    </View>
  );
};

export default ProfessionalCard;
