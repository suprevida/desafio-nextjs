import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import { ResumePokemon } from "../models/Pokemon";
import PokeAPIService from "../services/PokeAPI";

export default function Home() {
  const [pokemons, setPokemons] = useState<
    { slot: number; pokemon: ResumePokemon }[]
  >([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const { data } = await PokeAPIService.getPokemonsFireType();
        setPokemons(data.pokemon);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();
  }, []);

  return <PageWrapper></PageWrapper>;
}
