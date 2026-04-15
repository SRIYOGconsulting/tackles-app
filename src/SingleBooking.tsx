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

  const {width} = useWindowDimensions(); // Get screen width

  // Define a dynamic font size based on screen width
  const getFontSize = (baseSize: number) => {
    return width < 350 ? baseSize * 0.9 : baseSize; // Reduce font size on smaller screens
  };

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <View style={styles.content}>
        <Text style={[styles.title, {fontSize: getFontSize(24)}]}>
          Single Booking
        </Text>

        <View style={styles.details}>
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Full Name
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Name}
              </Text>
            </View>
            <LocationIcon width={40} height={40} style={styles.icon} />
          </View>

          <Text style={[styles.label, {fontSize: getFontSize(18)}]}>Phone</Text>
          <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
            +971-{entry.Phone}
          </Text>

          <View style={styles.rowWrap}>
            <View style={styles.halfWidth}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Services
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Service}
              </Text>
            </View>
            <View style={styles.flex1Padding}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Budget
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                AED{entry.Budget}
              </Text>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <View style={styles.flex1}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Booking Date
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Date}
              </Text>
            </View>
            <View style={styles.flex1Padding}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Shift
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Shift}
              </Text>
            </View>
          </View>

          <View style={styles.rowCenter}>
            <View style={styles.flex1}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Service Date
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                15 April 2025
              </Text>
            </View>
            <View style={styles.flex1Padding}>
              <Text style={[styles.label, {fontSize: getFontSize(18)}]}>
                Selected Priority
              </Text>
              <Text style={[styles.value, {fontSize: getFontSize(18)}]}>
                {entry.Priority}
              </Text>
            </View>
          </View>

          <View style={styles.rowWrap}>
            <Text style={[styles.label, {fontSize: getFontSize(18)}, styles.halfWidthText]}>
              Selected Location
            </Text>
            <Text
              style={[
                styles.value,
                {fontSize: getFontSize(18)},
                styles.locationValue,
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

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonFlex,
              width < 350 ? styles.buttonMarginRight0 : styles.buttonMarginRight16,
            ]}>
            <Text style={styles.buttonText}>Update Status</Text>
            <DropIcon height={20} width={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonFlex]}>
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
  header: {
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderColor: '#CAD2DF',
  },
  flex1: {
    flex: 1,
  },
  icon: {
    marginRight: 30,
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  halfWidth: {
    width: '50%',
    paddingRight: 10,
  },
  flex1Padding: {
    flex: 1,
    paddingLeft: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  halfWidthText: {
    width: '50%',
  },
  locationValue: {
    paddingLeft: 10,
    flex: 1,
  },
  buttonFlex: {
    flex: 1,
  },
  buttonMarginRight0: {
    marginRight: 0,
  },
  buttonMarginRight16: {
    marginRight: 16,
  },
});

export default SingleBooking;
