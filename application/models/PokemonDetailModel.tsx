import {Pokemon_v2_type} from './Pokemon';

export interface PokemonDetailData {
  base_happiness: number;
  capture_rate: number;
  name: string;
  gender_rate: number;
  base_experience: number;
  pokemon_v2_pokemons: Pokemon_v2_pokemons[];
}

interface Pokemon_v2_pokemontypes {
  pokemon_v2_type: Pokemon_v2_type[];
}

interface Pokemon_v2_pokemons {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  pokemon_species_id: number;
  weight: number;
  pokemon_v2_pokemontypes: Pokemon_v2_pokemontypes;
}
