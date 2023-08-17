import {gql} from '@apollo/client';

export const GET_POKEMONS = gql`
  query getAllPokemonsWithLimit($limit: Int, $offset: Int) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemonTypes: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
      specy: pokemon_v2_pokemonspecy {
        generation: pokemon_v2_generation {
          id
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query getPokemonDetail($_eq: Int = 1) {
    pokemonDetail: pokemon_v2_pokemonspecies(where: {id: {_eq: $_eq}}) {
      base_happiness
      capture_rate
      hatch_counter
      name
      gender_rate
      info: pokemon_v2_pokemons {
        base_experience
        height
        id
        is_default
        name
        pokemon_species_id
        weight
        stats: pokemon_v2_pokemonstats(order_by: {stat_id: asc}) {
          base_stat
          stat_id
          effort
          pokemon_v2_stat {
            name
          }
        }
        abilities: pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
          is_hidden
        }
        pokemonTypes: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            id
          }
        }
      }
      speciesNames: pokemon_v2_pokemonspeciesnames(
        where: {language_id: {_eq: 9}}
      ) {
        genus
        language_id
      }
      growthRate: pokemon_v2_growthrate {
        name
        id
      }
      eggGroups: pokemon_v2_pokemonegggroups {
        pokemon_v2_egggroup {
          name
          id
        }
      }
      dexNumbers: pokemon_v2_pokemondexnumbers {
        pokemon_v2_pokedex {
          pokemon_v2_pokedexdescriptions(where: {language_id: {_eq: 9}}) {
            description
          }
          pokemon_v2_pokedexnames(where: {language_id: {_eq: 9}}) {
            name
          }
        }
        pokedex_number
      }
      evolutionChain: pokemon_v2_evolutionchain {
        id
        species: pokemon_v2_pokemonspecies(order_by: {order: asc}) {
          id
          name
          pokemon_v2_pokemonevolutions {
            min_level
            pokemon_v2_evolutiontrigger {
              id
              name
            }
            pokemon_v2_item {
              id
              name
            }
            min_affection
            min_beauty
            min_happiness
            time_of_day
          }
          order
          speciesFlavorTexts: pokemon_v2_pokemonspeciesflavortexts(
            where: {language_id: {_eq: 9}, version_id: {_eq: 26}}
            order_by: {id: desc}
          ) {
            flavor_text
            version_id
          }
        }
      }
    }
  }
`;
