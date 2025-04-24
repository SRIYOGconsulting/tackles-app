import {View, Text, FlatList, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FaqsCard from '../components/faqs/FaqsCard';
import {faqsQuestioin} from '../data/Data';

const FaqsScreen = ({navigation}: {navigation: any}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter FAQs based on the search term
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

      <View style={{paddingHorizontal: '4%', paddingTop: '5%'}}>
        <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 2}}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>FAQs</Text>

        {/* Search Bar Component */}
        <TextInput
          style={{
            height: 40,
            fontSize: 16,
            borderRadius: 5,
            paddingLeft: 10,
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: '#E2E2E27A',
            fontWeight: '400',
          }}
          placeholder="Search "
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
        contentContainerStyle={{paddingHorizontal: '4%'}}
      />
    </View>
  );
};

export default FaqsScreen;
