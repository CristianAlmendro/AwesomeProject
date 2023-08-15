export interface PokemonType {
  id: number;
  name: string;
  pokemon_v2_type: PokemonType;
}

export interface GenerationData {
  id: number;
  name: string;
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  generationData: {
    generation: GenerationData;
  };
}

export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  generationData: GenerationData;

  constructor(data: PokemonData) {
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.types = data.types.map(type => ({
      id: type.pokemon_v2_type.id,
      name: type.pokemon_v2_type.name,
      pokemon_v2_type: type,
    }));
    this.generationData = data.generationData.generation;
  }
}
