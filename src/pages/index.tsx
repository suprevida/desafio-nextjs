import { useState, useEffect } from "react";
import Card from "../components/Card";
import PageWrapper from "../components/PageWrapper";
import { ResumePokemon } from "../models/Pokemon";
import PokeAPIService from "../services/PokeAPI";
import * as S from "./_styles";

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

  return (
    <PageWrapper>
      <S.ListWrapper>
        {pokemons.map((poke, i) => (
          <Card key={`${poke.pokemon.name}-${i}`} pokemon={poke.pokemon} />
        ))}
      </S.ListWrapper>
    </PageWrapper>
  );
}
