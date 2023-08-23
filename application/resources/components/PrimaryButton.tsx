import React, {ReactNode} from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Colors from '../colors';

interface PrimaryButtonProps {
  onPress: () => void;
  children: ReactNode;
}

const PrimaryButton = ({onPress, children}: PrimaryButtonProps) => {
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
  },
});

export default PrimaryButton;
