import {PokemonType} from './Pokemon';

export interface PokemonDetailData {
  base_happiness: number;
  capture_rate: number;
  name: string;
  gender_rate: number;
  base_experience: number;
  info: Pokemon_v2_pokemons[];
}

interface Pokemon_v2_pokemons {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  pokemon_species_id: number;
  weight: number;
  pokemonTypes: PokemonType[];
}
