import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonDetailProps, RenderItemProps} from '../Types';
import {
  calculateTypeDefenses,
  convertToFormattedDistance,
  convertToFormattedWeight,
  convertToPaddedString,
  genderRateCalculation,
  uppercaseFirstLetter,
} from '../Utilities';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';
import PokemonTypeSelector from './PokemonTypeSelector';

export default function CardAbout({pokemonDetail}: PokemonDetailProps) {
  if (!pokemonDetail) {
    return <Text>Loading...</Text>;
  }

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  const height = convertToFormattedDistance(pokemonDetail?.info[0].height ?? 0);
  const weight = convertToFormattedWeight(pokemonDetail?.info[0].weight ?? 0);

  const RenderItem = ({index, name}: RenderItemProps) => (
    <Text style={styles.dataResult}>{`${index + 1}. ${uppercaseFirstLetter(
      name,
    )}`}</Text>
  );

  const growthRate = uppercaseFirstLetter(pokemonDetail?.growthRate.name);
  const genderRate: number[] = genderRateCalculation(
    pokemonDetail?.gender_rate,
  );

  const types = pokemonDetail.info[0].pokemonTypes.map(type => type.type.name);
  const defenses = calculateTypeDefenses(types);
  const defenseData = Object.entries(defenses)
    .map(([attackType, defenseMultiplier]) => ({
      attackType,
      defenseMultiplier,
    }))
    .filter(defense => defense.defenseMultiplier === 2);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.flavorText}>
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
        <View style={styles.typeDefenses}>
          {defenseData.map(item => (
            <View style={styles.typeDefenseItem}>
              <View style={getDynamicStyles(item.attackType).defenseType}>
                {PokemonTypeSelector(item.attackType, 15, 15, Colors.white)}
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={dynamicStyles.sectionTitle}>Training</Text>

      <View style={styles.pokemonData}>
        <Text style={styles.dataTitle}>EV Yield</Text>
        <View style={styles.abilities}>
          {pokemonDetail?.info[0].stats
            .filter(stat => stat.base_stat === 65)
            .map((item, index) => (
              <RenderItem
                key={index}
                index={index}
                name={item.pokemon_v2_stat.name}
              />
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
      <Text style={dynamicStyles.sectionTitle}>Location</Text>
      {pokemonDetail.numbers.map((number, index) => (
        <View key={index} style={styles.pokemonData}>
          <Text style={styles.dataTitle}>
            {convertToPaddedString(number.pokedex_number, 3)}
          </Text>
          <Text style={styles.dataResult}>
            {number.pokemon_v2_pokedex.pokedexDescriptions[0].description}
          </Text>
        </View>
      ))}
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
    flex: 1,
    flexWrap: 'wrap',
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
  typeDefenses: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  typeDefenseItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 12,
  },
  flavorText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Colors.textGray,
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 30,
  },
});
