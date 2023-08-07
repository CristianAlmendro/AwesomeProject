import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import PokemonBadge from './PokemonBadge';

function PokemonItem({pokemon}) {
  return (
    <View style={style.container}>
      <View style={style.emptyTop} />
      <View style={style.cardArea}>
        <Text style={style.pokemonId}>{pokemon.id}</Text>
        <Text style={style.pokemonName}>{pokemon.name}</Text>
        <FlatList
          style={style.pokemonBadge}
          data={pokemon.types}
          renderItem={({item}) => <PokemonBadge item={item.pokemon_v2_type} />}
          keyExtractor={item => item.pokemon_v2_type.id.toString()}
        />
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
