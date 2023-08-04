import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const CustomTextInput = ({placeholder, imageSource, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.iconContainer} source={imageSource} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
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
    borderWidth: 1,
    borderColor: '#ccc',
    height: 60,
  },
  iconContainer: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default CustomTextInput;
