import { Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import PageWrapper from "../components/PageWrapper";
import { useSearchField } from "../context/SearchInput/Context";
import { ResumePokemon } from "../models/Pokemon";
import PokeAPIService from "../services/PokeAPI";
import * as S from "./_styles";

interface HomeProps {
  pokemons: { slot: number; pokemon: ResumePokemon }[];
  status: number;
}

export default function Home({ pokemons, status }: HomeProps) {
  const { searchField } = useSearchField();
  const [filteredPokemons, setFilteredPokemons] = useState<
    { slot: number; pokemon: ResumePokemon }[]
  >([]);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter(
      ({ pokemon }) => pokemon.name.indexOf(searchField) > -1
    );

    setFilteredPokemons(newFilteredPokemons);
  }, [searchField, pokemons]);

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
        {(searchField.length > 0 ? filteredPokemons : pokemons).map(
          (poke, i) => (
            <Card key={`${poke.pokemon.name}-${i}`} pokemon={poke.pokemon} />
          )
        )}
      </S.ListWrapper>
    </PageWrapper>
  );
}

/*
  Realizei essa abordagem para popular o front-end, pensando em priorizar o SEO.
  Visto que estou fazendo um e-commerce.
*/
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await PokeAPIService.getPokemonsFireType();

    const { data, status } = res;

    const pokemonsWithPrice: { slot: number; pokemon: ResumePokemon }[] =
      data.pokemon.map((poke) => ({
        ...poke,
        pokemon: { ...poke.pokemon, price: (Math.random() * 1100).toFixed(2) },
      }));

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
