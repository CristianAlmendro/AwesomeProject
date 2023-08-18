import {PokemonType} from './Pokemon';

export interface PokemonDetailData {
  base_happiness: number;
  capture_rate: number;
  name: string;
  gender_rate: number;
  base_experience: number;
  info: Pokemon_v2_pokemons[];
  speciesNames: Pokemon_v2_pokemonspeciesnames[];
  growthRate: GrowthRate;
  eggGroups: EggGroup[];
  evolutionChain: {
    id: number;
    species: PokemonSpecies[];
  };
}

interface Pokemon_v2_pokemons {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  pokemon_species_id: number;
  weight: number;
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  pokemonTypes: PokemonType[];
}

interface PokemonAbility {
  pokemon_v2_ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface PokemonStat {
  base_stat: number;
  stat_id: number;
  effort: number;
  pokemon_v2_stat: {
    name: string;
  };
}

interface Pokemon_v2_pokemonspeciesnames {
  genus: string;
  language_id: number;
}

interface EvolutionTrigger {
  id: number;
  name: string;
}

interface EvolutionItem {
  id: number;
  name: string;
}

interface PokemonEvolution {
  min_level: number;
  pokemon_v2_evolutiontrigger: EvolutionTrigger;
  pokemon_v2_item: EvolutionItem;
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  time_of_day: string;
}

interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  pokemon_v2_pokemonevolutions: PokemonEvolution[];
  speciesFlavorTexts: {
    flavor_text: string;
    version_id: number;
  }[];
}

interface GrowthRate {
  name: string;
  id: number;
}

interface EggGroup {
  pokemon_v2_egggroup: {
    name: string;
    id: number;
  };
}
