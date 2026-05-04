import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';

// Get screen dimensions for responsive layout
const {width} = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 385; // Base screen width to scale from
  return (size * width) / guidelineBaseWidth;
};

const FaqsSingle = ({route}: {route: any}) => {
  const {category, questions} = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <HeaderComponent style={styles.header} />
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />
      <View style={styles.content}>
        <Text style={styles.categoryTitle}>{category}</Text>

        {questions.map((q: any, index: number) => (
          <View key={index} style={styles.questionContainer}>
            <View style={styles.questionRow}>
              <Text style={styles.question}>{q.num}.</Text>
              <View style={styles.questionTextContainer}>
                <Text style={[styles.question, {fontSize: scaleFont(20)}]}>
                  {q.question}
                </Text>
                <Text style={[styles.answer, {fontSize: scaleFont(18)}]}>
                  {q.answer}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    paddingTop: 20.7
  },
  content: {
    marginHorizontal: '5%',
    paddingTop: '6%',
    paddingLeft:'1.5%'
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: scaleFont(21),
    fontWeight: '500',
    color: '#0E61CD',
    marginBottom: '5%',
  },
  questionContainer: {
    marginBottom: 15,
  },
  questionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: '3.9%',
  },
  questionTextContainer: {
    width: '93.5%',
  },
  answer: {
    fontSize: 18,
    fontWeight: '500',
    flexWrap: 'wrap',
  },
});

export default FaqsSingle;
