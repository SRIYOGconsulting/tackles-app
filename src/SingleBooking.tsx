import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import DropIcon from './assets/icons/contact/DropDown.svg';
import LocationIcon from './assets/icons/LocationPin.svg';

const SingleBooking = ({route}: {route: any}) => {
  // Get the entry data passed via navigation
  const {entry} = route.params;

  return (
    <View style={styles.container}>
      <HeaderComponent
        style={{
          paddingHorizontal: '5%',
          borderBottomWidth: 1,
          borderColor: '#CAD2DF',
        }}
      />
      <View style={{paddingHorizontal: '5%', flex: 1, paddingTop: '6%'}}>
        <Text style={styles.title}>Single Booking </Text>

        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>{entry.name}</Text>
            </View>
            <LocationIcon width={40} height={40} style={{marginRight: 30}} />
          </View>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+971-{entry.number}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <Text style={styles.label}>Selected Services</Text>
              <Text style={styles.value}>{entry.selectedService}</Text>
            </View>
            <View style={{paddingLeft: 30}}>
              <Text style={styles.label}>Budget</Text>
              <Text style={styles.value}>AED{entry.selectedBudget}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{width: '50%'}}>
              <Text style={styles.label}>Booking Date</Text>
              <Text
                style={{
                  fontSize: 18,

                  fontWeight: '500',
                }}>
                15 April 2025
              </Text>
              <Text style={styles.value}>Friday 14:34</Text>
            </View>
            <View style={{paddingLeft: 30}}>
              <Text style={styles.label}>Selected Shift</Text>
              <Text style={styles.value}>{entry.selectedShift}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <View style={{width: '50%'}}>
              <Text style={styles.label}>Service Date</Text>
              <Text
                style={{
                  fontSize: 18,

                  fontWeight: '500',
                }}>
                15 April 2025
              </Text>
              <Text style={styles.value}>Friday 14:34</Text>
            </View>
            <View style={{paddingLeft: 30}}>
              <Text style={styles.label}>Selected Priority</Text>

              <Text style={styles.value}>{entry.selectedPriority}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.label, {width: '50%'}]}>
              Selected Location
            </Text>
            <Text style={[styles.value, {paddingLeft: 30}]}>
              {entry.selectedArea}
            </Text>
          </View>

          <Text style={styles.label}>Message/ Information/ Instruction</Text>
          <Text style={styles.value}>{entry.message}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              width: 173,
              height: 48,
              borderWidth: 1,
              borderColor: '#0E61CD',
              alignItems: 'center',
              paddingHorizontal: 14,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              borderRadius: 4,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Update Status</Text>
            <DropIcon height={20} width={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 129,
              height: 48,
              borderWidth: 1,
              borderColor: '#0E61CD',
              alignItems: 'center',
              paddingHorizontal: 14,

              justifyContent: 'center',
              marginBottom: 16,
              borderRadius: 4,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  value: {
    fontSize: 18,
    marginBottom: 20,

    fontWeight: '500',
  },
});

export default SingleBooking;
