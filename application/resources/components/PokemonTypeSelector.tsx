import React from 'react';
import {View} from 'react-native';
import Bug from '../icons/PokemonTypes/Bug';
import Dark from '../icons/PokemonTypes/Dark';
import Grass from '../icons/PokemonTypes/Grass';
import Poison from '../icons/PokemonTypes/Poison';
import Dragon from '../icons/PokemonTypes/Dragon';
import Electric from '../icons/PokemonTypes/Electric';
import Fairy from '../icons/PokemonTypes/Fairy';
import Fighting from '../icons/PokemonTypes/Fighting';
import Fire from '../icons/PokemonTypes/Fire';
import Flying from '../icons/PokemonTypes/Flying';
import Ghost from '../icons/PokemonTypes/Ghost';
import Ground from '../icons/PokemonTypes/Ground';
import Ice from '../icons/PokemonTypes/Ice';
import Normal from '../icons/PokemonTypes/Normal';
import Psychic from '../icons/PokemonTypes/Psychic';
import Rock from '../icons/PokemonTypes/Rock';
import Steel from '../icons/PokemonTypes/Steel';
import Water from '../icons/PokemonTypes/Water';

interface TypeComponentMap {
  [typeName: string]: React.ComponentType<any>;
}

const typeComponentMap: TypeComponentMap = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
};

function PokemonTypeSelector(
  typeName: string,
  width: number,
  height: number,
  color: string,
) {
  const Component = typeComponentMap[typeName] || View;

  return <Component width={width} height={height} color={color} />;
}

export default PokemonTypeSelector;
