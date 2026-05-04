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
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',

    borderRadius: 12,

    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 4,
    width: 120,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ButtonComponent;
