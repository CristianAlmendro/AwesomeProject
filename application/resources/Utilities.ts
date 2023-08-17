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
