import {PokemonEvolution} from '../models/PokemonDetailModel';

export const intPadZeros = (id: number) => {
  const paddedNumber = String(id).padStart(3, '0');
  return `#${paddedNumber}`;
};

export const getPokemonArtWork = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export function uppercaseFirstLetter(word: string) {
  if (word === '') {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function convertToFormattedDistance(distanceInMeters: number) {
  const meters = distanceInMeters / 10;
  const feet = Math.floor(meters / 0.3048);
  const remainingMeters = meters - feet * 0.3048;
  const inches = Math.round(remainingMeters * 39.37);

  return `${meters.toFixed(1)}m (${feet}'${inches}")`;
}

export function convertToFormattedWeight(weightInKilograms: number) {
  const kilograms = weightInKilograms / 10;
  const pounds = weightInKilograms * 2.20462;

  return `${kilograms.toFixed(1)}kg (${pounds.toFixed(1)} lbs)`;
}

export function genderRateCalculation(genderRate: number) {
  const male = (genderRate / 8) * 100;
  const female = 100 - male;
  return [male, female];
}

export function convertToPaddedString(numberToConvert: number, length: number) {
  return numberToConvert.toString().padStart(length, '0');
}

export function calculateMinStat(baseStat: number, statName: string) {
  if (statName === 'hp') {
    return Math.round(baseStat * 2 + 110);
  } else {
    return Math.round((baseStat * 2 + 5) * 0.9);
  }
}

export function calculateMaxStat(baseStat: number, statName: string) {
  if (statName === 'hp') {
    return Math.round(baseStat * 2 + 204);
  } else {
    return Math.round((baseStat * 2 + 99) * 1.1);
  }
}

export function calculateProgressBar(baseStat: number) {
  const maxValue = calculateMaxStat(baseStat, '');
  const result = baseStat / calculateMaxStat(baseStat, '');
  return [result, maxValue];
}

export function getStatName(statName: string) {
  switch (statName) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp. Atk';
    case 'special-defense':
      return 'Sp. Def';
    case 'speed':
      return 'Speed';
    default:
      return '';
  }
}

export function getEvollutionName(pokemonEvolution: PokemonEvolution) {
  switch (pokemonEvolution.pokemon_v2_evolutiontrigger.name) {
    case 'level-up':
      const level = pokemonEvolution.min_level ?? '??';
      return `Level ${level}`;
    case 'use-item':
      return `Item\n${pokemonEvolution.pokemon_v2_item.name}`;
    default:
      return '??????';
  }
}

export const typeNames = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

interface TypeChart {
  [attackType: string]: {[defenseType: string]: number};
}

const typeChart: TypeChart = {
  normal: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 1,
    ghost: 0,
    steel: 0.5,
  },
  fire: {bug: 2, grass: 2, ice: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5},
  water: {fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, electric: 0.5},
  electric: {water: 2, flying: 2, electric: 0.5, ground: 0},
  grass: {water: 2, ground: 2, grass: 0.5, electric: 0.5, ice: 2},
  ice: {
    grass: 2,
    ground: 2,
    flying: 2,
    dragon: 2,
    fire: 0.5,
    ice: 0.5,
    steel: 0.5,
  },
  fighting: {
    normal: 2,
    ice: 2,
    rock: 2,
    dark: 0.5,
    psychic: 0.5,
    flying: 0.5,
    bug: 0.5,
    fairy: 2,
    ghost: 0,
  },
  poison: {
    grass: 2,
    fairy: 2,
    poison: 0.5,
    ground: 0.5,
    bug: 0.5,
    rock: 0.5,
    ghost: 0.5,
  },
  ground: {
    fire: 2,
    electric: 2,
    grass: 0.5,
    ice: 0.5,
    water: 2,
    poison: 2,
    rock: 2,
  },
  flying: {
    electric: 2,
    ice: 2,
    rock: 2,
    grass: 0.5,
    fighting: 2,
    bug: 2,
    ground: 0,
  },
  psychic: {fighting: 2, poison: 2, psychic: 0.5, dark: 0},
  bug: {
    grass: 2,
    psychic: 2,
    dark: 2,
    fighting: 0.5,
    flying: 0.5,
    ghost: 0.5,
    fire: 0.5,
    fairy: 0.5,
    steel: 0.5,
  },
  rock: {
    fire: 2,
    ice: 2,
    flying: 2,
    bug: 2,
    normal: 0.5,
    poison: 0.5,
    fighting: 0.5,
    ground: 0.5,
    steel: 2,
  },
  ghost: {ghost: 2, psychic: 2, normal: 0, dark: 0.5},
  dragon: {dragon: 2, steel: 0.5, fairy: 0},
  dark: {psychic: 2, ghost: 0.5, dark: 0.5, fighting: 0.5, fairy: 2},
  steel: {
    ice: 2,
    rock: 2,
    fairy: 2,
    steel: 0.5,
    water: 0.5,
    electric: 0.5,
    fire: 0.5,
  },
  fairy: {fighting: 2, dragon: 2, dark: 2, bug: 0.5, poison: 0.5, steel: 0.5},
};

export function calculateTypeDefenses(pokemonTypes: string[]): {
  [attackType: string]: number;
} {
  const defenses: {[attackType: string]: number} = {};

  for (const attackType in typeChart) {
    let defenseMultiplier = 1.0;
    for (const defenseType of pokemonTypes) {
      defenseMultiplier *= typeChart[attackType][defenseType] || 1;
    }

    defenses[attackType] = defenseMultiplier;
  }

  return defenses;
}
