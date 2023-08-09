import React from 'react';
import {View} from 'react-native';
import Bug from '../icons/PokemonTypes/Bug';
import Dark from '../icons/PokemonTypes/Dark';
import Colors from '../colors';

function PokemonTypeSelector(
  typeName: string,
  width: number,
  height: number,
  color: string,
) {
  var viewToRender = <View />;
  switch (typeName) {
    case 'grass':
      viewToRender = <Bug width={width} height={height} color={color} />;
      break;
    case 'poison':
      viewToRender = <Dark width={width} height={height} color={color} />;
      break;
  }
  return viewToRender;
}

export default PokemonTypeSelector;
