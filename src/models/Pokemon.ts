export interface HttpResponseGetPokemonByType {
  id: string;
  name: string;
  pokemon: { pokemon: ResumePokemon; slot: number }[];
}

export interface ResumePokemon {
  name: string;
  price: string;
  url: string;
}

export interface ResumeType {
  name: string;
  url: string;
}

export interface CartPokemon {
  id: number;
  name: string;
  image: string | null;
  price: string;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  types: {
    sloat: number;
    type: ResumeType;
  }[];
}
