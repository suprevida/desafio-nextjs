export const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL_POKEAPI}api/v2`;

export const GET_POKEMONS_BY_TYPE = (type: string) => `${BASE_URL}/type/${type}`;
export const GET_POKEMON_BY_NAME = (name: string) => `${BASE_URL}/pokemon/${name}`;

