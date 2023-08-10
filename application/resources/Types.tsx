export interface IconProps {
  color: string;
  width?: number;
  height?: number;
}

export interface PokemonModelInterface {
  base_happiness: number;
  capture_rate: number;
  hatch_counter: number;
  name: string;
  gender_rate: number;
  pokemons: PokemonDetailModelInterface[];
  speciesNames: {
    genus: string;
    language_id: number;
  }[];
  growthRate: {
    name: string;
    id: number;
  };
  eggGroups: {
    name: string;
    id: number;
  }[];
  dexNumbers: {
    pokedex: {
      descriptions: string[];
      names: string[];
    };
    number: number;
  }[];
  evolutionChain: {
    id: number;
    species: {
      id: number;
      name: string;
      evolutions: {
        min_level: number;
        trigger: {
          id: number;
          name: string;
        };
        item: {
          id: number;
          name: string;
        };
        min_affection: number;
        min_beauty: number;
        min_happiness: number;
        time_of_day: string;
      }[];
      order: number;
      flavorTexts: string[];
    }[];
  };
}

export interface PokemonDetailModelInterface {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  species_id: number;
  weight: number;
  stats: {
    base_stat: number;
    stat_id: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
  types: {
    type_id: number;
  }[];
}
