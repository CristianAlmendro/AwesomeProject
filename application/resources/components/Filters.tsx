import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Filters() {
  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Filters</Text>
      <Text style={commonStyles.description}>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </Text>
      <Text style={commonStyles.subTitle}>Types</Text>
      <Text style={commonStyles.subTitle}>Weaknesses</Text>
      <Text style={commonStyles.subTitle}>Heights</Text>
      <Text style={commonStyles.subTitle}>Weights</Text>
      <Text style={commonStyles.subTitle}>Number Range</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={commonStyles.secondaryButton}>
          <Text style={commonStyles.secondaryButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.secondaryButton}>
          <Text style={commonStyles.secondaryButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginTop: 30,
  },
  buttons: {
    flexDirection: 'row',
    marginRight: 40,
  },
});
