import { Paper } from "@material-ui/core";
import React from "react";
import { ResumePokemon } from "../../models/Pokemon";
import * as S from "./styles";

interface CardProps {
  pokemon: ResumePokemon;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <S.Card>
      <Paper>{pokemon.name}</Paper>
    </S.Card>
  );
};

export default Card;
