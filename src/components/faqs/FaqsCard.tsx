import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
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
      style={styles.card}
      onPress={() =>
        navigation.navigate('FAQsSingle', {category, number, id, questions})
      }>
      <Text style={styles.categoryText}>
        {category}
      </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.05,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderRadius: width * 0.02,
    marginVertical: height * 0.006,
    paddingLeft: width * 0.03,
    backgroundColor: '#fff',
  },
  categoryText: {
    fontSize: height * 0.019,
    fontWeight: '500',
    color: '#000',
  },
  numberContainer: {
    height: height * 0.05,
    width: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E61CD',
    borderRadius: 2.5,
    borderColor: '#979797',
  },
  numberText: {
    color: '#fff',
    fontSize: height * 0.022,
    fontWeight: '400',
  },
});

export default FaqsCard;
