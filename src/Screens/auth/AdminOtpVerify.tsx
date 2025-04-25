import {View, Text, Image} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

type Props = {};

const AdminOtpVerify = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={{paddingHorizontal: '4%', paddingVertical: '5%', flex: 1}}>
        <Text style={{fontSize: 24, fontWeight: '400'}}>
          Thank you! OTP verified successfully. Your booking is now confirmed!
        </Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/image/otpVerify.png')} />
          <Text
            style={{
              marginTop: '10%',
              fontSize: 20,
              width: '50%',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            OTP confirmed — booking successful!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AdminOtpVerify;
