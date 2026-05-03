import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';


const {width} = Dimensions.get('window');

const HeaderComponent = ({style}: any) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Image
        source={require('../assets/image/header/logo.png')}
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
    alignItems: 'center',
    paddingLeft:15,
    gap:233,
    marginTop:-8

  },
  leftIcon: {
    width: width * 0.26,
    height: width * 0.08,
  },
  rightIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },
});

export default HeaderComponent;
