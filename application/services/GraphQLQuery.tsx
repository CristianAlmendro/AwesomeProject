import {gql} from '@apollo/client';

const GET_ITEMS = gql`
  query getAllPokemonsWithLimit($limit: Int) {
    pokemons: pokemon_v2_pokemon(limit: 20) {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
      generationData: pokemon_v2_pokemonspecy {
        generation: pokemon_v2_generation {
          id
          name
        }
      }
    }
  }
`;

export default GET_ITEMS;
