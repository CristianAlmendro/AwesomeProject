import React from 'react';
import {Button} from 'react-native';

function PokemonList({navigation}): JSX.Element {
  return (
    <Button
      title="Test"
      onPress={() => {
        navigation.popToTop();
      }}>
      Pokemon List
    </Button>
  );
}

export default PokemonList;
