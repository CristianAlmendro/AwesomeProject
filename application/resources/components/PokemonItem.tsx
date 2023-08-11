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
import {Pokemon} from '../../models/Pokemon';
import {useNavigation} from '@react-navigation/native';
import {getPokemonArtWork, intToHexColor} from '../Utilities';
import Pattern from '../icons/Pattern';
import Pokeball from '../icons/Pokeball';

interface PokemonItemProps {
  pokemon: Pokemon;
}

function PokemonItem({pokemon}: PokemonItemProps) {
  const dynamicStyles = getDynamicStyles(pokemon.types[0].name);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonDetail', {pokemonId: pokemon.id})
      }>
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
                renderItem={({item}) => <PokemonBadge item={item} />}
                keyExtractor={item => String(item.id)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={style.patternContainer}>
        <Pattern width={74} height={32} />
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
  cardArea: {
    height: 115,
    padding: 20,
    flexDirection: 'column',
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
    marginTop: 5,
    flexDirection: 'row',
  },
  pokemonImageContainer: {
    zIndex: 2,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pokemonImage: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  pokemonContent: {
    flexDirection: 'row',
  },
  patternContainer: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 90,
  },
  pokeballContainer: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
});

export default PokemonItem;
