import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {PokemonDetailProps} from '../Types';
import {
  calculateMaxStat,
  calculateMinStat,
  calculateProgressBar,
  calculateTypeDefenses,
  getStatName,
  uppercaseFirstLetter,
} from '../Utilities';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';
import PokemonTypeSelector from './PokemonTypeSelector';

export default function CardStats({pokemonDetail}: PokemonDetailProps) {
  if (!pokemonDetail) {
    return <Text>Loading...</Text>;
  }

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );

  const types = pokemonDetail.info[0].pokemonTypes.map(type => type.type.name);
  const defenses = calculateTypeDefenses(types);
  const defenseData = Object.entries(defenses).map(
    ([attackType, defenseMultiplier]) => ({
      attackType,
      defenseMultiplier,
    }),
  );

  const name = uppercaseFirstLetter(pokemonDetail.name);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        <View style={styles.typeDefenses}>
          {defenseData.map((item, index) => (
            <View key={index} style={styles.typeDefenseItem}>
              <View style={getDynamicStyles(item.attackType).defenseType}>
                {PokemonTypeSelector(item.attackType, 15, 15, Colors.white)}
              </View>
              <Text style={styles.typeDefenseMultiplier}>
                {item.defenseMultiplier === 1
                  ? ''
                  : item.defenseMultiplier === 0.25
                  ? '¼'
                  : item.defenseMultiplier === 0.5
                  ? '½'
                  : '2'}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 50,
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
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
    marginBottom: 20,
  },
  typeDefenses: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  typeDefenseItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 20,
  },
  typeDefensesDescription: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textGray,
  },
  typeDefenseMultiplier: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: Colors.textGray,
  },
});
