import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../colors';
import PokemonBadge from './PokemonBadge';
import {getDynamicStyles} from '../dynamicStyles';
import {PokemonData} from '../../models/Pokemon';
import {useNavigation} from '@react-navigation/native';
import {
  getPokemonArtWork,
  intToHexColor,
  uppercaseFirstLetter,
} from '../Utilities';
import Pattern from '../icons/Pattern';
import Pokeball from '../icons/Pokeball';

interface PokemonItemProps {
  pokemon: PokemonData;
}

function PokemonItem({pokemon}: PokemonItemProps) {
  const navigation = useNavigation();
  const dynamicStyles = getDynamicStyles(pokemon.pokemonTypes[0].type.name);
  const pokemonName = uppercaseFirstLetter(pokemon.name);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonDetail', {pokemonId: pokemon.id})
      }>
      <View style={style.container}>
        <View style={style.emptyTop} />
        <View style={dynamicStyles.background}>
          <View style={style.pokemonContent}>
            <View style={style.pokemonInfoContainer}>
              <Text style={style.pokemonId}> {intToHexColor(pokemon.id)}</Text>
              <Text style={style.pokemonName}>{pokemonName}</Text>
              <FlatList
                style={style.pokemonBadge}
                data={pokemon.pokemonTypes}
                renderItem={({item}) => <PokemonBadge item={item.type.name} />}
                keyExtractor={item => String(item.type.id)}
              />
            </View>
            <View style={style.pokemonImageContainer}>
              <Image
                style={style.pokemonImage}
                source={{
                  uri: getPokemonArtWork(pokemon.id),
                }}
              />
            </View>
            <View style={style.pokeballContainer}>
              <Pokeball />
            </View>
          </View>
        </View>
      </View>
      <View style={style.patternContainer}>
        <Pattern width={74} height={32} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
  },
  emptyTop: {
    height: 25,
  },
  pokemonInfoContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  pokemonId: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.textPokemonId,
  },
  pokemonName: {
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.white,
  },
  pokemonBadge: {
    marginTop: 5,
    flexDirection: 'row',
  },
  pokemonImage: {
    width: 130,
    height: 130,
  },
  pokemonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 115,
  },
  patternContainer: {
    position: 'absolute',
    left: 90,
    top: 30,
  },
  pokemonImageContainer: {
    zIndex: 2,
    right: 10,
    top: -25,
  },
  pokeballContainer: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
  },
});

export default PokemonItem;
