import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailData} from '../../models/PokemonDetailModel';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';
import {
  convertToFormattedDistance,
  convertToFormattedWeight,
  uppercaseFirstLetter,
} from '../Utilities';

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

  const height = convertToFormattedDistance(pokemonDetail?.info[0].height ?? 0);
  const weight = convertToFormattedWeight(pokemonDetail?.info[0].weight ?? 0);

  const RenderItem = ({index, name}) => (
    <Text style={styles.dataResult}>{`${index + 1}. ${uppercaseFirstLetter(
      name,
    )}`}</Text>
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
        <Text style={styles.dataTitle}>Height</Text>
        <Text style={styles.dataResult}>{height}</Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Weight</Text>
        <Text style={styles.dataResult}>{weight}</Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Abilities</Text>
        <View style={styles.abilities}>
          {pokemonDetail?.info[0].abilities.map((item, index) => (
            <RenderItem index={index} name={item.pokemon_v2_ability.name} />
          ))}
        </View>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Weaknesses</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.info[0].abilities[0].pokemon_v2_ability.name}
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
  abilities: {
    flexDirection: 'column',
  },
});
