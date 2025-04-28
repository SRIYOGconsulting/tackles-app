import {View, Text, FlatList, TextInput, Dimensions} from 'react-native';
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />

      <View
        style={{paddingHorizontal: width * 0.04, paddingTop: height * 0.02}}>
        <Text
          style={{
            fontSize: height * 0.028,
            fontWeight: '900',
            marginBottom: height * 0.005,
          }}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: height * 0.025, fontWeight: '500'}}>FAQs</Text>

        {/* Search Bar */}
        <TextInput
          style={{
            height: height * 0.055,
            fontSize: height * 0.02,
            borderRadius: width * 0.02,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.015,
            marginTop: height * 0.015,
            backgroundColor: '#E2E2E27A',
            fontWeight: '600',
          }}
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
        contentContainerStyle={{
          paddingHorizontal: width * 0.04,
          paddingBottom: height * 0.02,
        }}
      />
    </View>
  );
};

export default FaqsScreen;
