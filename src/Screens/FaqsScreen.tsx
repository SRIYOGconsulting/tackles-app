import {View, Text, FlatList, TextInput, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FaqsCard from '../components/faqs/FaqsCard';
import {faqsQuestioin} from '../data/Data';

const {width, height} = Dimensions.get('window');

const FaqsScreen = ({navigation}: {navigation: any}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqsQuestioin.filter(item => {
    return (
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.questions.some(question =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    );
  });

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <View style={{borderBottomWidth:1,borderColor: '#CAD2DF',marginTop:6}}/>

      <View style={styles.content}>
        <Text style={styles.title}>Professional & Reliable Services</Text>
        <Text style={styles.subtitle}>FAQs</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Render filtered FAQs */}
      <FlatList
        data={filteredFaqs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <FaqsCard
            category={item.category}
            number={item.number}
            id={item.id}
            questions={item.questions}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop:20.7
  },
  content: {
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: height * 0.028,
    fontWeight: '900',
    marginBottom: height * 0.005,
  },
  subtitle: {
    fontSize: height * 0.025,
    fontWeight: '500',
  },
  searchInput: {
    height: height * 0.055,
    fontSize: height * 0.02,
    borderRadius: width * 0.02,
    paddingLeft: width * 0.03,
    marginBottom: height * 0.015,
    marginTop: height * 0.015,
    backgroundColor: '#E2E2E27A',
    fontWeight: '600',
  },
  flatListContent: {
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
  },
});

export default FaqsScreen;
