import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width,height} = Dimensions.get('window');

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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: height * 0.015,
    height: height * 0.06,
     overflow: 'hidden',
  },

  leftIcon: {
    width: width * 0.32,
    height: width * 0.08,
  },

  rightIcon: {
    width: width * 0.085,
    height: width * 0.085,
  },
});

export default HeaderComponent;
