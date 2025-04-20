import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

type Props = {};

const ContactScreen = (props: Props) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <Text>ContactScreen</Text>
    </View>
  );
};

export default ContactScreen;
