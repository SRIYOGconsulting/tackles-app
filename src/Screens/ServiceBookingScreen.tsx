import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Button,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Dropdown from '../components/Dropdown';
import {area, budget, priority, services, shifts} from '../data/Data';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {addFormData, updateFormData} from '../redux/slice/formSlice';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropIcon from '../assets/icons/contact/DropDown.svg';

const ServiceBookingScreen = ({navigation}: {navigation: any}) => {
  const dispatch: AppDispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      name &&
      number &&
      selectedService &&
      selectedShift &&
      selectedPriority &&
      selectedBudget &&
      selectedArea &&
      date
    ) {
      const newEntry = {
        id: Date.now(), // Use timestamp as unique ID
        name,
        number,
        selectedService,
        selectedShift,
        selectedPriority,
        selectedBudget,
        selectedArea,
        message,
        date: date?.toISOString() || '',
      };

      dispatch(addFormData(newEntry));
      navigation.navigate('AdminOtp'); // Navigate to OTP screen
    } else {
      Alert.alert('Incomplete Form', 'Please fill in all required fields.');
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={{paddingHorizontal: '4%', paddingTop: '5%'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Request Services</Text>
        <View style={{marginTop: '4%'}}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 10,
              height: 38,
              marginBottom: 10,
              fontSize: 16,
              fontWeight: '500',
              borderColor: '#E3E3E3',
            }}
            placeholderTextColor={'#4B4B4B'}
          />
          <TextInput
            placeholder="Phone Number"
            value={number}
            onChangeText={value => setNumber(value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 10,
              marginBottom: 10,
              height: 38,
              fontSize: 16,
              fontWeight: '500',
              borderColor: '#E3E3E3',
            }}
            placeholderTextColor={'#4B4B4B'}
          />
          <Dropdown
            options={services}
            placeholder="Select Services"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedService}
            showRequired={true}
          />
          <View style={{marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                paddingHorizontal: 10,
                height: 32,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: date ? '#4B4B4B' : '#4B4B4B', fontSize: 16}}>
                {date ? date.toDateString() : 'Select Date'}
              </Text>
              <DropIcon height={16} width={16} />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  if (event.type === 'set' && selectedDate) {
                    setDate(selectedDate);
                  }
                  setShow(Platform.OS === 'ios');
                }}
              />
            )}
          </View>
          <Dropdown
            options={area}
            placeholder="Select Location"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedShift}
          />
          <Dropdown
            options={shifts}
            placeholder="Select Shift"
            placeholderColor="#555"
            onSelectOption={setSelectedShift}
            showRequired={true}
          />
          <Dropdown
            options={priority}
            placeholder="Select Priority"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedPriority}
            showRequired={true}
          />
          <Dropdown
            options={budget}
            placeholder="Select Budget"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedBudget}
            showRequired={true}
          />
          <Dropdown
            options={area}
            placeholder="Select Area"
            placeholderColor="#4B4B4B"
            onSelectOption={setSelectedArea}
          />
          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            style={{
              height: 85,
              borderWidth: 1,
              paddingBottom: 58,
              paddingLeft: 10,
              borderRadius: 4,
              borderColor: '#E3E3E3',
              fontSize: 16,
              fontWeight: '500',
            }}
            editable
            multiline
            placeholderTextColor={'#4B4B4B'}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#0E61CD',
            borderRadius: 4,
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 130,
          }}
          onPress={handleSubmit}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '700'}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceBookingScreen;
