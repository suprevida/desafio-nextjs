import { Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import Card from "../components/Card";
import PageWrapper from "../components/PageWrapper";
import { ResumePokemon } from "../models/Pokemon";
import PokeAPIService from "../services/PokeAPI";
import * as S from "./_styles";

interface HomeProps {
  pokemons: { slot: number; pokemon: ResumePokemon }[];
  status: number;
}

export default function Home({ pokemons, status }: HomeProps) {
  console.log(pokemons)

  if (status !== 200) {
    return (
      <PageWrapper>
        <Typography>Ash, we have a problem</Typography>
      </PageWrapper>
    );
  }

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await PokeAPIService.getPokemonsFireType();

    const { data, status } = res;

    const pokemonsWithPrice: { slot: number; pokemon: ResumePokemon }[] =
      data.pokemon.map((poke) => ({
        ...poke,
        pokemon: { ...poke.pokemon, price: (Math.random() * 1100).toFixed(2) },
      }));

    console.log(pokemonsWithPrice[0])

    return {
      props: {
        pokemons: pokemonsWithPrice,
        status,
      },
    };
  } catch (error) {
    return {
      props: {
        pokemons: [],
        status: error.response.status,
      },
    };
  }
};
