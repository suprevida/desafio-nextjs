import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const Card = styled(Paper)`
  width: 250px;
  height: auto;
  margin-bottom: 16px;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PokemonImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90px;
`;
