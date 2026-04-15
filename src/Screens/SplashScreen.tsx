import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const [milliseconds, setMilliseconds] = useState<number>(3000);
  const totalDuration = 3000;

  useEffect(() => {
    setMilliseconds(totalDuration);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(totalDuration - elapsed, 0);
      setMilliseconds(Math.round(remaining));
      if (remaining <= 0) {
        clearInterval(interval);
        navigation.replace('OnBoarding1');
      }
    }, 1); // 1ms interval for smooth display
    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/splash.png')}
        style={styles.splashImage}
      />
      <Text style={styles.counter}>{milliseconds}</Text>
      <View style={styles.logo}>
        <Text style={styles.partnerText}>
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
    backgroundColor: '#fff',
  },
  counter: {
    top: '10%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  splashImage: {
    top: '28%',
  },
  logo: {
    bottom: '8%',
    alignItems: 'center',
    gap: 20,
  },
  partnerText: {
    fontSize: 16,
    color: '#4B4B4B',
    fontWeight: '400',
  },
});

export default SplashScreen;
