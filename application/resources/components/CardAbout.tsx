import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailData} from '../../models/PokemonDetailModel';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';
import {
  convertToFormattedDistance,
  convertToFormattedWeight,
  genderRateCalculation,
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

  const growthRate = uppercaseFirstLetter(pokemonDetail?.growthRate.name);
  const genderRate: number[] = genderRateCalculation(
    pokemonDetail?.gender_rate,
  );

  return (
    <ScrollView style={styles.container}>
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
      <Text style={dynamicStyles.sectionTitle}>Training</Text>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>EV Yield</Text>
        <View style={styles.abilities}>
          {pokemonDetail?.info[0].stats
            .filter(stat => stat.base_stat === 65)
            .map((item, index) => (
              <RenderItem index={index} name={item.pokemon_v2_stat.name} />
            ))}
        </View>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Catch Rate</Text>
        <Text style={styles.dataResult}>{height}</Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Base Friendship</Text>
        <Text style={styles.dataResult}>{pokemonDetail?.base_happiness}</Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Base Exp</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.info[0].base_experience}
        </Text>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Growth Rate</Text>
        <Text style={styles.dataResult}>{growthRate}</Text>
      </View>
      <Text style={dynamicStyles.sectionTitle}>Breeding</Text>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Gender</Text>
        <View style={styles.genderRate}>
          <Text style={styles.genderMale}>♀{genderRate[1]},</Text>
          <Text style={styles.genderFemale}>♂{genderRate[0]}</Text>
        </View>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Egg Groups</Text>
        <View style={styles.abilities}>
          {pokemonDetail?.eggGroups.map((item, index) => (
            <RenderItem index={index} name={item.pokemon_v2_egggroup.name} />
          ))}
        </View>
      </View>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>Egg Cycles</Text>
        <Text style={styles.dataResult}>
          {pokemonDetail?.info[0].base_experience}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 400,
    flexDirection: 'column',
  },
  pokemonData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dataTitle: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    width: 100,
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
  genderRate: {
    flexDirection: 'row',
  },
  genderMale: {
    fontSize: 16,
    color: Colors.typeFlying,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  genderFemale: {
    fontSize: 16,
    color: Colors.typeFairy,
    fontWeight: '400',
    fontStyle: 'normal',
  },
});
