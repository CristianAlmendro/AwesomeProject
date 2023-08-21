import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonDetailProps} from '../Types';
import {
  getPokemonArtWork,
  intPadZeros,
  uppercaseFirstLetter,
} from '../Utilities';
import {getDynamicStyles} from '../dynamicStyles';
import Colors from '../colors';
import PokeballEvolution from '../icons/PokeballEvolution';

export default function CardEvolution({pokemonDetail}: PokemonDetailProps) {
  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={dynamicStyles.sectionTitle}>Evolution Chart</Text>
      <View style={styles.evolutionContainer}>
        {pokemonDetail?.evolutionChain.species.map((_, index) =>
          index < pokemonDetail?.evolutionChain.species.length - 1 ? (
            <View key={index} style={styles.evolutionRow}>
              <View style={styles.pokemon}>
                <View style={styles.imageContainer}>
                  <PokeballEvolution />
                </View>
                <Image
                  style={styles.pokemonImage}
                  source={{
                    uri: getPokemonArtWork(
                      pokemonDetail?.evolutionChain.species[index].id,
                    ),
                  }}
                />
                <Text style={styles.pokemonId}>
                  {intPadZeros(pokemonDetail?.evolutionChain.species[index].id)}
                </Text>
                <Text style={styles.pokemonName}>
                  {uppercaseFirstLetter(
                    pokemonDetail?.evolutionChain.species[index].name,
                  )}
                </Text>
              </View>
              <View style={styles.pokemon}>
                <View style={styles.imageContainer}>
                  <PokeballEvolution />
                </View>
                <Image
                  style={styles.pokemonImage}
                  source={{
                    uri: getPokemonArtWork(
                      pokemonDetail?.evolutionChain.species[index + 1].id,
                    ),
                  }}
                />
                <Text style={styles.pokemonId}>
                  {intPadZeros(
                    pokemonDetail?.evolutionChain.species[index + 1].id,
                  )}
                </Text>
                <Text style={styles.pokemonName}>
                  {uppercaseFirstLetter(
                    pokemonDetail?.evolutionChain.species[index + 1].name,
                  )}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          ),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 50,
  },
  pokemonImage: {
    zIndex: 2,
    width: 75,
    height: 75,
    marginTop: 15,
  },
  imageContainer: {
    position: 'absolute',
  },
  evolutionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  evolutionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginRight: 5,
  },
  pokemon: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
  },
  pokemonId: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.textPokemonId,
  },
  pokemonName: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: Colors.textBlack,
  },
});
