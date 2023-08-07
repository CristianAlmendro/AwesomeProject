import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import PokemonBadge from './PokemonBadge';
import {getDynamicStyles} from '../dynamicStyles';

function PokemonItem({pokemon}) {
  const dynamicStyles = getDynamicStyles(pokemon.types[0].pokemon_v2_type.name);

  const intToHexColor = (number: any) => {
    const paddedNumber = String(number).padStart(3, '0');
    return `#${paddedNumber}`;
  };

  return (
    <View style={style.container}>
      <View style={style.emptyTop} />
      <View style={dynamicStyles.background}>
        <View style={style.cardArea}>
          <Text style={style.pokemonId}> {intToHexColor(pokemon.id)}</Text>
          <Text style={style.pokemonName}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
          <FlatList
            style={style.pokemonBadge}
            data={pokemon.types}
            renderItem={({item}) => (
              <PokemonBadge item={item.pokemon_v2_type} />
            )}
            keyExtractor={item => item.pokemon_v2_type.id.toString()}
          />
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
