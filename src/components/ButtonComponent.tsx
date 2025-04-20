import {
  View,
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
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',

    borderRadius: 12,

    justifyContent: 'center',
    paddingTop: 6,
    paddingBottom: 10,
    width: 140,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default ButtonComponent;
