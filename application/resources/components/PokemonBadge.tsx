import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';
import PokemonTypeSelector from './PokemonTypeSelector';
import {PokemonType} from '../../models/Pokemon';

interface PokemonBadgeProps {
  item: PokemonType;
}

function PokemonBadge({item}: PokemonBadgeProps) {
  const dynamicStyles = getDynamicStyles(item.name);
  const pokemonType = PokemonTypeSelector(item.name, 15, 15, Colors.white);
  return (
    <View style={dynamicStyles.type}>
      <View style={style.container}>
        {pokemonType}
        <Text style={style.bargeText}>
          {' '}
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    padding: 5,
    borderRadius: 3,
  },
  bargeImage: {
    width: 15,
    height: 15,
  },
  bargeText: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    color: Colors.white,
    marginLeft: 5,
  },
});

export default PokemonBadge;
