import {PokemonDetailModelInterface} from '../resources/Types';

export class PokemonDetailModel implements PokemonDetailModelInterface {
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

  constructor(data: any) {
    this.base_experience = data.base_experience;
    this.height = data.height;
    this.id = data.id;
    this.is_default = data.is_default;
    this.name = data.name;
    this.species_id = data.pokemon_species_id;
    this.weight = data.weight;
    this.stats = data.pokemon_v2_pokemonstats.map((stat: any) => ({
      base_stat: stat.base_stat,
      stat_id: stat.stat_id,
      effort: stat.effort,
      stat: {
        name: stat.pokemon_v2_stat.name,
      },
    }));
    this.abilities = data.pokemon_v2_pokemonabilities.map((ability: any) => ({
      ability: {
        name: ability.pokemon_v2_ability.name,
      },
      is_hidden: ability.is_hidden,
    }));
    this.types = data.pokemon_v2_pokemontypes.map((type: any) => ({
      type_id: type.type_id,
    }));
  }
}
