import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NumberBar = ({ navigation }: { navigation: any }) => {
  const [phone, setPhone] = useState('');

  const dynamicWidth = wp('75%');
  const fontSize = wp('4.5%');
  const helpFontSize = wp('3.5%');

  return (
    <View style={[styles.container, { width: dynamicWidth }]}>
      <View style={styles.phoneContainer}>
        <Image
          source={require('../../assets/image/header/right.png')}
          style={styles.icon}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={phone}
            onChangeText={(text) => {
              // remove everything except numbers
              let cleaned = text.replace(/[^0-9]/g, '');

              // limit to 10 digits (optional)
              cleaned = cleaned.slice(0, 10);

              // format as 3-3-4
              let formatted = cleaned;

              if (cleaned.length > 3 && cleaned.length <= 6) {
                formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
              } else if (cleaned.length > 6) {
                formatted =
                  cleaned.slice(0, 3) +
                  ' ' +
                  cleaned.slice(3, 6) +
                  ' ' +
                  cleaned.slice(6);
              }

              setPhone(formatted);
            }}
            placeholder="240 345 7466"
            placeholderTextColor="#999"
            style={[styles.input, { fontSize }]}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('OTP')}
        style={styles.helpButton}>
        <Text style={[styles.helpText, { fontSize: helpFontSize }]}>
          Help
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('4.5%'),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0E61CD',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    flex: 1,
  },

  icon: {
    height: hp('4%'),
    width: wp('7.5%'),
    marginLeft: -4,
    marginRight: wp('2%'),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    color: '#4B4B4B',
    fontWeight: '700',
    includeFontPadding: false,
    textAlignVertical: 'center',
    paddingVertical: 0,
     textAlign: 'center',
     letterSpacing:wp('0.6%')
  },
  helpButton: {
    backgroundColor: '#0E61CD',
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },

  helpText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default NumberBar;
