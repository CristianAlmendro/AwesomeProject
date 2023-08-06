import React from 'react';
import {Text, View} from 'react-native';

function PokemonItem({item}) {
  return (
    <View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

export default PokemonItem;
