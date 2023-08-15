import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../colors.js';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.textGray}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 60,
    backgroundColor: Colors.backgroundInput,
  },
  iconContainer: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textBlack,
  },
});

export default CustomTextInput;
