import { AxiosResponse } from "axios";
import { HttpResponseGetPokemonByType } from "../../models/Pokemon";
import api from "./api";
import { GET_POKEMONS_BY_TYPE } from "./constants";

const PokeAPIService = {
  getPokemonsFireType: (): Promise<AxiosResponse<HttpResponseGetPokemonByType>> => {
    return new Promise((resolve, reject) => {
      api
        .get(GET_POKEMONS_BY_TYPE("10"))
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};

export default PokeAPIService;
