import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import { AlphabetKey, GlossaryData2 } from '../data/GlossaryData2';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const alphabet: AlphabetKey[] = [
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'
];

const ContactScreen = () => {
  const [selectedLetter, setSelectedLetter] = useState<AlphabetKey>('A');

 const filteredData = GlossaryData2[selectedLetter] || [];

 

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <HeaderComponent style={styles.header} />

      <View style={styles.divider} />

      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Explore common handyman, repair, maintenance, installation, and home improvement terms from A to Z.
        </Text>

        {/* ALPHABET */}
        <View style={styles.alphabetBox}>
          <View style={styles.alphabetGrid}>
            {alphabet.map(letter => (
              <Pressable
                key={letter}
                onPress={() => setSelectedLetter(letter)}
                style={[
                  styles.letterButton,
                  selectedLetter === letter && styles.activeLetter,
                ]}
              >
                <Text
                  style={[
                    styles.letterText,
                    selectedLetter === letter && styles.activeLetterText,
                  ]}
                >
                  {letter}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* SELECTED LETTER */}
        <View style={styles.selectedBox}>
          <Text style={styles.selectedText}>{selectedLetter}</Text>
        </View>

        {/* RESULTS */}
        <View style={styles.resultContainer}>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <View key={item.title} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.words}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noData}>
              No items found for "{selectedLetter}"
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('3.1%'),
  },

  divider: {
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
    marginTop: 16,
  },

  container: {
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },

  subtitle: {
    fontSize: wp('3.8%'),
    marginTop: 15,
    marginBottom: hp('4%'),
    textAlign: 'center',
    lineHeight: hp('2.5%'),
  },

  alphabetBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderColor: '#E5E7EB',
    borderWidth: 2,
    elevation: 2,
  },

  alphabetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  letterButton: {
    width: '12%',
    aspectRatio: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeLetter: {
    backgroundColor: '#0F766E',
  },

  letterText: {
    fontWeight: '700',
    color: '#111',
  },

  activeLetterText: {
    color: '#fff',
  },

  selectedBox: {
    marginTop: 15,
  },

  selectedText: {
    fontSize: wp('7%'),
    fontWeight: '900',
    color: '#0F766E',
    textAlign: 'center',
  },

  resultContainer: {
    marginTop: 15,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cardTitle: {
    fontSize: wp('4.3%'),
    fontWeight: '800',
  },

  cardText: {
    marginTop: hp('1%'),
    fontSize: wp('3.5%'),
    color: '#374151',
    lineHeight: hp('2.2%'),
  },

  noData: {
    marginTop: 20,
    color: '#6B7280',
    textAlign: 'center',
  },
});