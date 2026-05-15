import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import { GlossaryData } from '../data/GlossaryData';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ContactScreen = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');

  const filteredData = GlossaryData.filter(item => {
    if (!item?.title) return false;

    const firstLetter = item.title.trim().charAt(0).toUpperCase();
    return firstLetter === selectedLetter;
  });

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <HeaderComponent style={styles.header} />

      <View style={styles.divider} />

      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Explore common handyman, repair, maintenance, installation, and home improvement terms from A to Z.
        </Text>

        {/* BIG ALPHABET BOX */}
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

        {/* SELECTED LETTER DISPLAY BOX */}
        <View style={styles.selectedBox}>
          <Text style={styles.selectedText}>
            {selectedLetter}
          </Text>
        </View>

        {/* RESULT CARDS */}
        <View style={styles.resultContainer}>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <View key={item.id} style={styles.card}>
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
    lineHeight:hp('2.5%')
  },

  /* BIG BOX AROUND ALPHABET */
  alphabetBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderColor:'#E5E7EB',
    borderWidth:2,
    elevation:2
  },

  /* GRID WRAP */
  alphabetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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

  /* SELECTED LETTER BOX */
  selectedBox: {
    marginTop: 15,
    padding: 5,
    borderRadius: 10,
    borderWidth: 0,
  },

  selectedText: {
    fontSize: wp('7%'),
    fontWeight: '900',
    color: '#0F766E',
    textAlign:'center'
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
    lineHeight:hp('2.2%')
  },

  noData: {
    marginTop: 20,
    color: '#6B7280',
  },
});