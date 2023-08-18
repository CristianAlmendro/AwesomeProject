import {PokemonDetailData} from '../models/PokemonDetailModel';

export interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export interface NavigationProp {
  navigation: any;
}

export interface PokemonDetailProps {
  pokemonDetail?: PokemonDetailData;
}
