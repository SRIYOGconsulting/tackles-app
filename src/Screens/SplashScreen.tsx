import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

const SplashScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/splash.png')}
        style={styles.splashImage}
      />
      <View style={styles.logo}>
        <Text style={{fontSize: 16, color: '#4B4B4B', fontWeight: '400'}}>
          Technology Partner
        </Text>
        <Image
          source={require('../assets/image/sriyogLogo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  splashImage: {
    top: '28%',
  },
  logo: {bottom: '8%', alignItems: 'center', gap: 20},
});

export default SplashScreen;
