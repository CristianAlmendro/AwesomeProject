import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../colors';
import PokeballTab from '../icons/PokeballTab';

interface DetailTabsProps {
  tabSelected: number;
  setTabSelected: (tab: number) => void;
}

export default function DetailTabs({
  tabSelected,
  setTabSelected,
}: DetailTabsProps) {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => setTabSelected(0)}>
        {tabSelected === 0 ? (
          <>
            <View style={styles.pokeballTabContainer}>
              <PokeballTab />
            </View>
            <Text style={styles.buttonSelected}>About</Text>
          </>
        ) : (
          <Text style={styles.buttonUnselected}>About</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => setTabSelected(1)}>
        {tabSelected === 1 ? (
          <>
            <View style={styles.pokeballTabContainer}>
              <PokeballTab />
            </View>
            <Text style={styles.buttonSelected}>Stats</Text>
          </>
        ) : (
          <Text style={styles.buttonUnselected}>Stats</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => setTabSelected(2)}>
        {tabSelected === 2 ? (
          <>
            <View style={styles.pokeballTabContainer}>
              <PokeballTab />
            </View>
            <Text style={styles.buttonSelected}>Evolution</Text>
          </>
        ) : (
          <Text style={styles.buttonUnselected}>Evolution</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabContainer: {
    height: 50,
    width: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeballTabContainer: {
    position: 'absolute',
  },
  buttonSelected: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
  },
  buttonUnselected: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.5,
  },
});
