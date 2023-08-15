import {PokemonType} from './Pokemon';

interface PokemonDetailData {
  base_happiness: number;
}

export class PokemonDetailModel {
  base_happiness: number;

  constructor(data: PokemonDetailData) {
    this.base_happiness = data.base_happiness;
  }
}
