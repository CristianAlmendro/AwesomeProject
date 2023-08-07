import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import Colors from '../colors.js';

const CustomTextInput = ({placeholder, imageSource, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.iconContainer} source={imageSource} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.textGray}
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
    color: Colors.textBlack,
  },
});

export default CustomTextInput;
