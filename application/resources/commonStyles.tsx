import {StyleSheet} from 'react-native';
import Colors from './colors';

export const commonStyles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontStyle: 'normal',
    color: Colors.textBlack,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    color: Colors.textBlack,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: Colors.textGray,
    marginBottom: 35,
    marginRight: 40,
  },
  secondaryButton: {
    backgroundColor: Colors.backgroundInput,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: Colors.textGray,
    flexShrink: 1,
  },
});
