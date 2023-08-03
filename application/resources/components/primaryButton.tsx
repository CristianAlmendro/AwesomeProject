import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Colors from '../colors';

const PrimaryButton = ({onPress, children}) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    paddingBottom: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: '80%',
  },
});

export default PrimaryButton;
