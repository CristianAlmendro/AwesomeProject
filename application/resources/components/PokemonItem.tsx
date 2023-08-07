import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import PokemonBadge from './PokemonBadge';

function PokemonItem({item}) {
  return (
    <View style={style.container}>
      <View style={style.emptyTop} />
      <View style={style.cardArea}>
        <Text style={style.pokemonId}>{item.name}</Text>
        <Text style={style.pokemonName}>{item.description}</Text>
        <View style={style.pokemonBadge}>
          <PokemonBadge />
          <PokemonBadge />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  emptyTop: {
    height: 25,
  },
  cardArea: {
    height: 115,
    backgroundColor: Colors.backgroundTypeGrass,
    borderRadius: 10,
    padding: 20,
  },
  pokemonId: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    color: Colors.textNumber,
  },
  pokemonName: {
    fontSize: 26,
    fontWeight: '700',
    fontStyle: 'normal',
    color: Colors.white,
  },
  pokemonBadge: {
    flexDirection: 'row',
  },
});

export default PokemonItem;
