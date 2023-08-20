import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailProps} from '../Types';
import PokemonBadge from './PokemonBadge';
import {
  getPokemonArtWork,
  intPadZeros,
  uppercaseFirstLetter,
} from '../Utilities';
import Colors from '../colors';
import CircleBackground from '../icons/Circle';
import PatternDetail from '../icons/PatternDetail';
import {getDynamicStyles} from '../dynamicStyles';

export default function DetailHeader({pokemonDetail}: PokemonDetailProps) {
  const pokemonId = intPadZeros(pokemonDetail?.info[0].id ?? 0);
  const imageUrl = getPokemonArtWork(pokemonDetail?.info[0].id ?? 0);
  const pokemonName = uppercaseFirstLetter(pokemonDetail?.name ?? '');
  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerInfoContainer}>
        <View style={styles.circleBackgroundContainer}>
          <CircleBackground />
        </View>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.pokemonInfoContainer}>
          <Text style={styles.pokemonId}>{pokemonId}</Text>
          <Text style={styles.pokemonName}>{pokemonName}</Text>
          <View style={styles.badgeContainer}>
            {pokemonDetail?.info[0].pokemonTypes.map(item => (
              <PokemonBadge item={item.type.name} />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.patternDetailContainer}>
        <PatternDetail />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  pokemonImageContainer: {
    width: 125,
    height: 125,
  },
  pokemonImage: {
    zIndex: 2,
    width: 125,
    height: 125,
  },
  circleBackgroundContainer: {
    zIndex: 1,
    position: 'absolute',
  },
  pokemonInfoContainer: {
    marginLeft: 25,
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

  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  pokemonBadge: {
    flexDirection: 'row',
  },
  patternDetailContainer: {
    position: 'absolute',
    marginTop: 90,
    right: -40,
    zIndex: 1,
  },
});
