import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonDetailProps} from '../Types';
import {getDynamicStyles} from '../dynamicStyles';
import * as Progress from 'react-native-progress';
import {calculateMaxStat, calculateMinStat} from '../Utilities';

export default function CardStats({pokemonDetail}: PokemonDetailProps) {
  if (!pokemonDetail) {
    return <Text>Loading...</Text>;
  }

  const dynamicStyles = getDynamicStyles(
    pokemonDetail?.info[0].pokemonTypes[0].type.name ?? '',
  );
  return (
    <ScrollView>
      <Text style={dynamicStyles.sectionTitle}>Base Stats</Text>
      {pokemonDetail?.info[0].stats.map(item => (
        <View style={styles.baseStats}>
          <Text style={styles.statsTitle}>{item.pokemon_v2_stat.name}</Text>
          <Text>{item.base_stat}</Text>
          <Progress.Bar progress={0.3} />
          <Text>
            {calculateMinStat(item.base_stat, item.pokemon_v2_stat.name)}
          </Text>
          <Text>
            {calculateMaxStat(item.base_stat, item.pokemon_v2_stat.name)}
          </Text>
        </View>
      ))}
      <Text>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </Text>
      <Text style={dynamicStyles.sectionTitle}>Type Defenses</Text>
      <Text>The effectiveness of each type on POKEMONNAME</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  baseStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsTitle: {
    width: 44,
  },
});
