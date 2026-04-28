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
    borderWidth: 0.4,
    borderColor: 'hsl(180, 100%, 28%)',
    backgroundColor: '#fff',

    borderRadius: 30,
    justifyContent: 'center',

    paddingTop: 1,
    width: 100,

    boxShadow: '0 4px 0 hsl(180, 100%, 28%)',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color:"hsl(180, 100%, 28%)"
  },
});

export default ButtonComponent;
