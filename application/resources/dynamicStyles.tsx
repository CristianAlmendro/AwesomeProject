import {StyleSheet} from 'react-native';
import Colors from './colors';
const backgroundColorMappings = {
  grass: Colors.backgroundTypeGrass,
  fire: Colors.backgroundTypeFire,
  water: Colors.backgroundTypeWater,
  bug: Colors.backgroundTypeBug,
  normal: Colors.backgroundTypeNormal,
  // ... TODO: Add missing colors
};

const typeColorMappings = {
  grass: Colors.typeGrass,
  fire: Colors.typeFire,
  water: Colors.typeWater,
  bug: Colors.typeBug,
  normal: Colors.typeNormal,
  poison: Colors.typePoison,
  // ... TODO: Add missing colors
};

export const getDynamicStyles = textColor => {
  const backgroundColor =
    backgroundColorMappings[textColor] || Colors.primaryButtonBackground;

  const typeColor =
    typeColorMappings[textColor] || Colors.primaryButtonBackground;

  return StyleSheet.create({
    background: {
      borderRadius: 10,
      backgroundColor: backgroundColor,
    },
    type: {
      borderRadius: 3,
      backgroundColor: typeColor,
      marginRight: 5,
    },
  });
};
