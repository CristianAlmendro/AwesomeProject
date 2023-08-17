export interface PokemonType {
  type: {
    id: number;
    name: string;
  };
}

interface Generation {
  generation: {
    id: number;
    name: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  pokemonTypes: PokemonType[];
  specy: Generation;
}
