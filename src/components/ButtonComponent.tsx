import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const ButtonComponent = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#000',
    backgroundColor: 'green',

    borderRadius: 10,

    justifyContent: 'center',
    width: 110,
    marginBottom:50,
    paddingVertical:13
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 17,
    color:'#fff'
  },
});

export default ButtonComponent;
