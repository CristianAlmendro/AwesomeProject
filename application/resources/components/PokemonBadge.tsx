import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../colors';

function PokemonBadge({item}) {
  return (
    <View style={style.container}>
      <Image style={style.bargeImage} source={require('../icons/Filter.png')} />
      <Text style={style.bargeText}> {item.name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    marginRight: 5,
    padding: 5,
    borderRadius: 3,
    backgroundColor: Colors.backgroundTypeBug,
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
