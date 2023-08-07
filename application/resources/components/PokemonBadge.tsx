import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';
import {getDynamicStyles} from '../dynamicStyles';

function PokemonBadge({item}) {
  const dynamicStyles = getDynamicStyles(item.name);
  return (
    <View style={dynamicStyles.type}>
      <View style={style.container}>
        <Image
          style={style.bargeImage}
          source={require('../icons/Filter.png')}
        />
        <Text style={style.bargeText}> {item.name}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    padding: 5,
    borderRadius: 3,
  },
  bargeImage: {
    width: 15,
    height: 15,
  },
  bargeText: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    color: Colors.white,
    marginLeft: 5,
  },
});

export default PokemonBadge;
