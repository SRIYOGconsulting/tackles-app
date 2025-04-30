import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import DropIcon from './assets/icons/contact/DropDown.svg';
import LocationIcon from './assets/icons/LocationPin.svg';

const SingleBooking = ({route}: {route: any}) => {
  // Get the entry data passed via navigation
  const {entry} = route.params;

  const {width, height} = useWindowDimensions(); // Get screen width and height

  // Define a dynamic font size based on screen width
  const getFontSize = (baseSize: number) => {
    return width < 350 ? baseSize * 0.9 : baseSize; // Reduce font size on smaller screens
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        style={{
          paddingHorizontal: '5%',
          borderBottomWidth: 1,
          borderColor: '#CAD2DF',
        }}
      />
      <View
        style={[styles.content, {paddingHorizontal: '5%', paddingTop: '6%'}]}>
        <Text style={[styles.title, {fontSize: getFontSize(24)}]}>
          Single Booking
        </Text>

        <View style={styles.details}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{flex: 1}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Full Name
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Name}
              </Text>
            </View>
            <LocationIcon width={40} height={40} style={{marginRight: 30}} />
          </View>

          <Text style={[styles.label, {fontSize: getFontSize(18)}]}>Phone</Text>
          <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
            +971-{entry.Phone}
          </Text>

          <View style={[styles.row, {flexWrap: 'wrap'}]}>
            <View style={{width: '50%', paddingRight: 10}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Services
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Service}
              </Text>
            </View>
            <View style={{flex: 1, paddingLeft: 20}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Budget
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                AED{entry.Budget}
              </Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={{flex: 1}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Booking Date
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Date}
              </Text>
            </View>
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Shift
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Shift}
              </Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={{flex: 1}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Service Date
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                15 April 2025
              </Text>
            </View>
            <View style={{flex: 1, paddingLeft: 30}}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Priority
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Priority}
              </Text>
            </View>
          </View>

          <View style={[styles.row, {flexWrap: 'wrap'}]}>
            <Text
              style={[styles.label, {fontSize: getFontSize(18), width: '50%'}]}>
              Selected Location
            </Text>
            <Text
              style={[
                styles.value,
                {fontSize: getFontSize(18), paddingLeft: 10, flex: 1},
              ]}>
              {entry.Area}
            </Text>
          </View>

          <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
            Message/ Information/ Instruction
          </Text>
          <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
            {entry.Message}
          </Text>
        </View>

        <View
          style={[
            styles.row,
            {justifyContent: 'space-between', flexWrap: 'wrap'},
          ]}>
          <TouchableOpacity
            style={[
              styles.button,
              {flex: 1, marginRight: width < 350 ? 0 : 16},
            ]}>
            <Text style={styles.buttonText}>Update Status</Text>
            <DropIcon height={20} width={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {flex: 1}]}>
            <Text style={styles.buttonText}>Submit</Text>
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
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: '700',
  },
  value: {
    fontWeight: '500',
    marginBottom: 20,
  },
  details: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    height: 48,
    borderWidth: 1,
    borderColor: '#0E61CD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 4,
    paddingHorizontal: 14,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SingleBooking;
