import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailData} from '../../models/PokemonDetailModel';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';

interface CardAboutProps {
  pokemonDetail?: PokemonDetailData;
}

export default function CardAbout({pokemonDetail}: CardAboutProps) {
  if (!pokemonDetail) {
    return <Text>Loading...</Text>;
  }

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  return (
    <ScrollView>
      <Text style={styles.dataResult}>
        {
          pokemonDetail?.evolutionChain.species[0].speciesFlavorTexts[0]
            .flavor_text
        }
      </Text>
      <Text style={dynamicStyles.sectionTitle}>Pokédex Data</Text>
      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Species</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.speciesNames[0].genus}
        </Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Species</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.speciesNames[0].genus}
        </Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Species</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.speciesNames[0].genus}
        </Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Species</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.speciesNames[0].genus}
        </Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Species</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.speciesNames[0].genus}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pokemonData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dataTitle: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    width: 85,
    color: Colors.textBlack,
  },
  dataResult: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Colors.textGray,
  },
});
