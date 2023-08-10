import {
  PokemonDetailModelInterface,
  PokemonModelInterface,
} from '../resources/Types';
import {PokemonDetailModel} from './PokemonDetailModel';

export class PokemonModel implements PokemonModelInterface {
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

  constructor(data: any) {
    this.base_happiness = data.base_happiness;
    this.capture_rate = data.capture_rate;
    this.hatch_counter = data.hatch_counter;
    this.name = data.name;
    this.gender_rate = data.gender_rate;
    this.pokemons = data.pokemon_v2_pokemons.map(
      (pokemon: any) => new PokemonDetailModel(pokemon),
    );
    this.speciesNames = data.pokemon_v2_pokemonspeciesnames.map(
      (name: any) => ({
        genus: name.genus,
        language_id: name.language_id,
      }),
    );
    this.growthRate = {
      name: data.pokemon_v2_growthrate.name,
      id: data.pokemon_v2_growthrate.id,
    };
    this.eggGroups = data.pokemon_v2_pokemonegggroups.map((group: any) => ({
      name: group.pokemon_v2_egggroup.name,
      id: group.pokemon_v2_egggroup.id,
    }));
    this.dexNumbers = data.pokemon_v2_pokemondexnumbers.map(
      (dexNumber: any) => ({
        pokedex: {
          descriptions:
            dexNumber.pokemon_v2_pokedex.pokemon_v2_pokedexdescriptions.map(
              (description: any) => description.description,
            ),
          names: dexNumber.pokemon_v2_pokedex.pokemon_v2_pokedexnames.map(
            (name: any) => name.name,
          ),
        },
        number: dexNumber.pokedex_number,
      }),
    );
    this.evolutionChain = {
      id: data.pokemon_v2_evolutionchain.id,
      species: data.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map(
        (species: any) => ({
          id: species.id,
          name: species.name,
          evolutions: species.pokemon_v2_pokemonevolutions.map(
            (evolution: any) => ({
              min_level: evolution.min_level,
              trigger: {
                id: evolution.pokemon_v2_evolutiontrigger.id,
                name: evolution.pokemon_v2_evolutiontrigger.name,
              },
              item: {
                id: evolution.pokemon_v2_item.id,
                name: evolution.pokemon_v2_item.name,
              },
              min_affection: evolution.min_affection,
              min_beauty: evolution.min_beauty,
              min_happiness: evolution.min_happiness,
              time_of_day: evolution.time_of_day,
            }),
          ),
          order: species.order,
          flavorTexts: species.pokemon_v2_pokemonspeciesflavortexts.map(
            (flavorText: any) => flavorText.flavor_text,
          ),
        }),
      ),
    };
  }
}
