import { AxiosResponse } from "axios";
import { HttpResponseGetPokemonByType, Pokemon } from "../../models/Pokemon";
import api from "./api";
import { GET_POKEMONS_BY_TYPE, GET_POKEMON_BY_NAME } from "./constants";

const PokeAPIService = {
  getPokemonsFireType: (): Promise<
    AxiosResponse<HttpResponseGetPokemonByType>
  > => {
    return new Promise((resolve, reject) => {
      api
        .get(GET_POKEMONS_BY_TYPE("10"))
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  getPokemonByName: (
    name: string
  ): Promise<AxiosResponse<Pokemon>> => {
    return new Promise((resolve, reject) => {
      api
        .get(GET_POKEMON_BY_NAME(name))
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};

export default PokeAPIService;
