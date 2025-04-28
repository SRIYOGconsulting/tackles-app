import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

type Props = {style?: any};

const HeaderComponent = ({style}: Props) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Image
        source={require('../assets/image/header/left.png')}
        style={styles.leftIcon}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/image/header/right.png')}
        style={styles.rightIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
  },
  leftIcon: {
    width: width * 0.1, // around 11% of screen width
    height: width * 0.1, // making it square
  },
  rightIcon: {
    width: width * 0.3,
    height: width * 0.1,
  },
});

export default HeaderComponent;
