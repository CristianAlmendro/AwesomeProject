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

interface PokemonItemProps {
  pokemon: Pokemon;
}

function PokemonItem({pokemon}: PokemonItemProps) {
  const dynamicStyles = getDynamicStyles(pokemon.types[0].name);
  const navigation = useNavigation(); // Initialize the navigation hook
  const intToHexColor = (id: number) => {
    const paddedNumber = String(id).padStart(3, '0');
    return `#${paddedNumber}`;
  };

  const getImage = (id: any) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

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
                keyExtractor={item => item.id.toString()}
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
    </TouchableOpacity>
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
