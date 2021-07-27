export interface HttpResponseGetPokemonByType {
  id: string;
  name: string;
  pokemon: { pokemon: ResumePokemon; slot: number }[];
}

export interface ResumePokemon {
  name: string;
  url: string;
}
