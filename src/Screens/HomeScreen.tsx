import {View, Text, Image} from 'react-native';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import OnboardingComponent from '../components/OnboardingComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServicesCard from '../components/home/ServicesCard';
import ProfessionalCard from '../components/home/ProfessionalCard';
import NumberBar from '../components/home/NumberBar';
import UAE from '../assets/icons/UAE.svg';
type Props = {};

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#fff',
      }}>
      <Image source={require('../assets/image/homescreen/banner1.png')} />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          paddingRight: 16,
        }}>
        <HeaderComponent style={{paddingHorizontal: '4.5%'}} />
      </View>
      <View style={{paddingHorizontal: '4.5%', paddingTop: '6%', gap: '1%'}}>
        <Text style={{fontSize: 20, color: '#0E61CD', fontWeight: '700'}}>
          Tackles | Dubai
        </Text>
        <Text style={{color: '#0E61CD', fontWeight: '400'}}>
          Professional & Reliable Services in Dubai
        </Text>

        <Text style={{color: '#0E61CD', fontWeight: '700', fontSize: 16}}>
          Top Services
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesCard
            title="Painting"
            image={require('../assets/image/homescreen/painting1.png')}
          />
          <ServicesCard
            title="Plumbing"
            image={require('../assets/image/homescreen/plumbing.png')}
            style={{width: 120}}
          />
          <ServicesCard
            title="Tiling"
            image={require('../assets/image/homescreen/flooring.png')}
          />
        </View>

        <Text
          style={{
            color: '#0E61CD',
            fontWeight: '700',
            fontSize: 16,
            marginVertical: '2%',
          }}>
          Top Professional
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ProfessionalCard
            image={require('../assets/image/homescreen/person1.png')}
            title="Painter"
          />
          <ProfessionalCard
            image={require('../assets/image/homescreen/person5.png')}
            title="Plumber"
            style={{height: 75, width: 75}}
          />
          <ProfessionalCard
            image={require('../assets/image/homescreen/person3.png')}
            title="Electrician"
          />
          <ProfessionalCard
            image={require('../assets/image/homescreen/person4.png')}
            title="Mason"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <NumberBar navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
