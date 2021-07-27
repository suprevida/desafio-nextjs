import React, { useState, useEffect } from "react";
import { Pokemon, ResumePokemon } from "../../models/Pokemon";
import PokeAPIService from "../../services/PokeAPI";
import * as S from "./styles";
import { Skeleton } from "@material-ui/lab";
import Image from "next/image";
import { Button, Typography } from "@material-ui/core";
import { useShoppingCart } from "../../context/ShoppingCart/Context";
import { formatPrice } from "../../utils";

interface CardProps {
  pokemon: ResumePokemon;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();
  const { addPokemonInCart } = useShoppingCart();

  /*
    Infelizmente o get de pokemons por tipo, pega somente o nome. O que me 
    fez precisar criar esse useEffect pra pegar mais detalhes do pokemon. 
    Caso tivesse mais pokemons por tipo, eu criaria um load more na Home
  */
  useEffect(() => {
    const getPokemonDetails = async () => {
      setIsLoading(true);

      try {
        const { data } = await PokeAPIService.getPokemonByName(pokemon.name);
        setPokemonDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemonDetails();
  }, [pokemon.name]);

  const onClickBuyButton = () => {
    if (!pokemonDetails) return;

    addPokemonInCart({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      image: pokemonDetails.sprites.front_default,
      price: pokemon.price,
    });
  };

  return (
    <S.Card>
      {isLoading && pokemonDetails ? (
        <S.CardWrapper>
          <S.PokemonImgWrapper>
            {pokemonDetails.sprites.front_default ? (
              <Image
                src={pokemonDetails.sprites.front_default}
                width={100}
                height={100}
                alt={pokemon.name}
              />
            ) : (
              <Typography variant="caption">No image</Typography>
            )}
          </S.PokemonImgWrapper>
          <S.CardTitleWrapper>
            <Typography>{pokemonDetails.name}</Typography>
            <Typography>{`R$ ${
              pokemon.price && formatPrice(pokemon.price)
            }`}</Typography>
          </S.CardTitleWrapper>
          <div>
            <Typography variant="caption">
              {pokemonDetails.types.map(
                (type, i) =>
                  `${type.type.name}${
                    i + 1 === pokemonDetails.types.length ? "." : ", "
                  }`
              )}
            </Typography>
          </div>

          <Button onClick={onClickBuyButton} variant="contained">
            Comprar
          </Button>
        </S.CardWrapper>
      ) : (
        <Skeleton variant="rect" width="100%" height="100%" />
      )}
    </S.Card>
  );
};

export default Card;
