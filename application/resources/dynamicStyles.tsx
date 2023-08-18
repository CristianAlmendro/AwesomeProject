import {StyleSheet} from 'react-native';
import Colors from './colors';

interface TypeMapping {
  [key: string]: string;
}

const backgroundColorMappings: TypeMapping = {
  bug: Colors.backgroundTypeBug,
  dark: Colors.backgroundTypeDark,
  dragon: Colors.backgroundTypeDragon,
  electric: Colors.backgroundTypeElectric,
  fairy: Colors.backgroundTypeFairy,
  fighting: Colors.backgroundTypeFighting,
  fire: Colors.backgroundTypeFire,
  flying: Colors.backgroundTypeFlying,
  ghost: Colors.backgroundTypeGhost,
  grass: Colors.backgroundTypeGrass,
  ground: Colors.backgroundTypeGround,
  ice: Colors.backgroundTypeIce,
  normal: Colors.backgroundTypeNormal,
  poison: Colors.backgroundTypePoison,
  psychic: Colors.backgroundTypePsychic,
  rock: Colors.backgroundTypeRock,
  steel: Colors.backgroundTypeSteel,
  water: Colors.backgroundTypeWater,
};

const typeColorMappings: TypeMapping = {
  bug: Colors.typeBug,
  dark: Colors.typeDark,
  dragon: Colors.typeDragon,
  electric: Colors.typeElectric,
  fairy: Colors.typeFairy,
  fighting: Colors.typeFighting,
  fire: Colors.typeFire,
  flying: Colors.typeFlying,
  ghost: Colors.typeGhost,
  grass: Colors.typeGrass,
  ground: Colors.typeGround,
  ice: Colors.typeIce,
  normal: Colors.typeNormal,
  poison: Colors.typePoison,
  psychic: Colors.typePsychic,
  rock: Colors.typeRock,
  steel: Colors.typeSteel,
  water: Colors.typeWater,
};

export const getDynamicStyles = (textColor: string) => {
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
    sectionTitle: {
      color: typeColor,
      fontSize: 16,
      fontWeight: '700',
      fontStyle: 'normal',
      marginTop: 30,
      marginBottom: 20,
    },
    typeColor: {
      color: typeColor,
    },
    defenseType: {
      display: 'flex',
      borderRadius: 3,
      backgroundColor: typeColor,
      gap: 5,
      alignItems: 'center',
      padding: 5,
    },
  });
};
