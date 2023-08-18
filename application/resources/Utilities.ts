export const intToHexColor = (id: number) => {
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
