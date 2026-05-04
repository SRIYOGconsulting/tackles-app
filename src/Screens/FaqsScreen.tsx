import { View, Image, Text, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FaqsCard from '../components/faqs/FaqsCard';
import { faqsQuestioin } from '../data/Data';

const { width, height } = Dimensions.get('window');

const FaqsScreen = ({ navigation }: { navigation: any }) => {
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
      <View style={{ borderBottomWidth: 1, borderColor: '#CAD2DF', marginTop: 16 }} />

      <View style={styles.content}>
        <Text style={styles.title}>Professional & Reliable Services</Text>
        <Text style={styles.subtitle}>FAQs</Text>

        {/* Search Bar */}

        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/image/TabIcon/searchbar.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Render filtered FAQs */}
      <FlatList
        data={filteredFaqs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
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
    paddingTop: 20.7
  },
  content: {
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: width * 0.056,
    fontWeight: '700',
    marginBottom: height * 0.005,
  },
  subtitle: {
    fontSize: height * 0.025,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.045,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.011,
    marginBottom: height * 0.015,
    backgroundColor: '#E2E2E27A',
  },

  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: height * 0.02,
    fontWeight: '400',
    paddingVertical:9,
    marginBottom:-2
  },
  flatListContent: {
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
  },
});

export default FaqsScreen;
