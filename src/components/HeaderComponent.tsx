import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {style?: any};

const HeaderComponent = ({style}: Props) => {
  return (
    <View
      style={[
        {
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingVertical: '5.5%',
          paddingHorizontal: '4%',
        },
        style,
      ]}>
      <Image
        source={require('../assets/image/header/left.png')}
        style={{height: 38, width: 38}}
      />
      <Image source={require('../assets/image/header/right.png')} />
    </View>
  );
};

export default HeaderComponent;
