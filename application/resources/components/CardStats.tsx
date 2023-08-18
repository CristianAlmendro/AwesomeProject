import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailProps} from '../Types';
import {getDynamicStyles} from '../dynamicStyles';
import * as Progress from 'react-native-progress';
import {
  calculateMaxStat,
  calculateMinStat,
  calculateProgressBar,
  calculateTypeDefenses,
  getStatName,
  typeNames,
  uppercaseFirstLetter,
} from '../Utilities';
import Colors from '../colors';
import PokemonTypeSelector from './PokemonTypeSelector';

export default function CardStats({pokemonDetail}: PokemonDetailProps) {
  if (!pokemonDetail) {
    return <Text>Loading...</Text>;
  }

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  const types = pokemonDetail.info[0].pokemonTypes.map(type => type.type.name);
  console.log(types);
  const defenses = calculateTypeDefenses(types);
  console.log(defenses);
  const defenseData = Object.entries(defenses).map(
    ([attackType, defenseMultiplier]) => ({
      attackType,
      defenseMultiplier,
    }),
  );

  const renderItem = ({item}) => (
    <View style={styles.typeDefenseItem}>
      <View style={getDynamicStyles(item.attackType).defenseType}>
        {PokemonTypeSelector(item.attackType, 15, 15, Colors.white)}
      </View>
      <Text>{item.defenseMultiplier}</Text>
    </View>
  );

  const name = uppercaseFirstLetter(pokemonDetail.name);

  return (
    <ScrollView style={styles.container}>
      <Text style={dynamicStyles.sectionTitle}>Base Stats</Text>
      {pokemonDetail?.info[0].stats.map(item => (
        <View style={styles.baseStats}>
          <Text style={styles.statsTitle}>
            {getStatName(item.pokemon_v2_stat.name)}
          </Text>
          <Text style={styles.baseStat}>{item.base_stat}</Text>

          <Progress.Bar
            progress={calculateProgressBar(item.base_stat)[0]}
            width={null}
            color={dynamicStyles.typeColor.color}
            borderWidth={0}
            style={styles.progressBar}
          />
          <Text style={styles.minMaxStat}>
            {calculateMinStat(item.base_stat, item.pokemon_v2_stat.name)}
          </Text>
          <Text style={styles.minMaxStat}>
            {calculateMaxStat(item.base_stat, item.pokemon_v2_stat.name)}
          </Text>
        </View>
      ))}
      <View style={styles.baseStats}>
        <Text style={styles.statsTitle}>Total</Text>
        <Text style={styles.baseStat}>318</Text>
        <Text style={styles.minMaxStat}>Min</Text>
        <Text style={styles.minMaxStat}>Max</Text>
      </View>
      <Text style={styles.statDescription}>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </Text>
      <Text style={dynamicStyles.sectionTitle}>Type Defenses</Text>
      <View>
        <Text style={styles.typeDefensesDescription}>
          The effectiveness of each type on {name}
        </Text>
        <FlatList
          style={styles.typeDefenses}
          data={defenseData}
          renderItem={renderItem}
          keyExtractor={item => item.attackType}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    display: 'flex',
  },
  baseStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statsTitle: {
    width: 48,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textBlack,
  },
  baseStat: {
    width: 31,
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
  },
  minMaxStat: {
    width: 32,
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
  },
  progressBar: {
    marginHorizontal: 10,
    width: 120,
  },
  statDescription: {
    marginTop: 5,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
  },
  typeDefenses: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  typeDefenseItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  typeDefensesDescription: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
  },
});
