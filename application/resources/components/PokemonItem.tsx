import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import PokemonBadge from './PokemonBadge';
import {getDynamicStyles} from '../dynamicStyles';

function PokemonItem({pokemon}) {
  const dynamicStyles = getDynamicStyles(pokemon.types[0].pokemon_v2_type.name);

  const intToHexColor = (number: any) => {
    const paddedNumber = String(number).padStart(3, '0');
    return `#${paddedNumber}`;
  };

  const getImage = (number: any) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
  };

  return (
    <View style={style.container}>
      <View style={style.emptyTop} />
      <View style={dynamicStyles.background}>
        <View style={style.pokemonContent}>
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
          <View style={style.imageArea}>
            <Image
              style={style.pokemonImage}
              source={{
                uri: getImage(pokemon.id),
              }}
            />
          </View>
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
    width: '60%',
    height: 115,
    padding: 20,
    flexDirection: 'column',
  },
  imageArea: {
    width: '40%',
    paddingRight: 10,
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
  pokemonImage: {
    width: 130,
    height: 130,
  },
  pokemonContent: {
    flexDirection: 'row',
  },
});

export default PokemonItem;
