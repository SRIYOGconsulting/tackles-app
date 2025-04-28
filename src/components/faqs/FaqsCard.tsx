import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

type Props = {
  category?: string;
  number?: number;
  questions?: Array<{question: string; answer: string}>;
  navigation?: any;
  id?: number;
};

const FaqsCard = ({category, number, questions, navigation, id}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.06,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#E3E3E3',
        borderRadius: width * 0.02,
        marginVertical: height * 0.006,
        paddingLeft: width * 0.03,
        backgroundColor: '#fff',
      }}
      onPress={() =>
        navigation.navigate('FAQsSingle', {category, number, id, questions})
      }>
      <Text
        style={{
          fontSize: height * 0.022,
          fontWeight: '500',
          color: '#000',
        }}>
        {category}
      </Text>
      <View
        style={{
          height: height * 0.06,
          width: height * 0.06,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: width * 0.015,
          borderWidth: 1,
          borderColor: '#979797',
        }}>
        <Text
          style={{
            color: '#0E61CD',
            fontSize: height * 0.022,
            fontWeight: '400',
          }}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FaqsCard;
