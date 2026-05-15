import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import { FaqsData } from '../data/FAQsData';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  navigation?: any;
};

const FaqsScreen: React.FC<Props> = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <HeaderComponent style={styles.header} />

      <View style={styles.divider} />

      <View style={styles.container}>
        <Text style={styles.title}>Frequently Asked Questions</Text>

        {(FaqsData as FaqItem[]).map((item) => {
          const isOpen = expandedId === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => toggleItem(item.id)}
              style={styles.card}
            >
              <Text style={styles.cardTitle}>
                {item.id}. {item.question}
              </Text>

              {isOpen && (
                <Text style={styles.cardSubtitle}>
                  {item.answer}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('4%'),
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginTop: 16,
  },

  container: {
    paddingHorizontal: wp('6%'),
    paddingTop: hp('2%'),
  },

  title: {
    fontSize: wp('5.8%'),
    fontWeight: '900',
    color: '#064E3B',
    marginBottom: hp('5%'),
    marginTop:hp('2%')
  },

  card: {
    width: '100%',
    padding: 15,
    marginBottom: hp('3%'),
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2,
    borderColor: 'hsl(160, 51%, 70%)',
    borderWidth: 1,
  },

  cardTitle: {
    fontSize: wp('4%'),
    fontWeight: '700',
    color: 'hsl(164, 86%, 15%)',
    marginBottom: 6,
  },

  cardSubtitle: {
    fontSize: wp('3.6%'),
    color: '#000',
    fontWeight: '500',
    lineHeight: 20,
  },
});

export default FaqsScreen;