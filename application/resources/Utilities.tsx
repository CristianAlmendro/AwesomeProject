export const intToHexColor = (id: number) => {
  const paddedNumber = String(id).padStart(3, '0');
  return `#${paddedNumber}`;
};

export const getPokemonArtWork = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export function uppercaseFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
