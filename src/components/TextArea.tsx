import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type TextAreaProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
} & TextInputProps;

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder = 'Enter text...',
  minHeight = 100,
  maxHeight = 180,
  ...rest
}) => {
  const [height, setHeight] = useState(minHeight);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline
      scrollEnabled={height >= maxHeight}   // 👈 key feature
      onContentSizeChange={(event) => {
        const contentHeight = event.nativeEvent.contentSize.height;

        const newHeight = Math.min(
          maxHeight,
          Math.max(minHeight, contentHeight),
        );

        setHeight(newHeight);
      }}
      style={[
        styles.input,
        { height },
      ]}
      textAlignVertical="top"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TextArea;