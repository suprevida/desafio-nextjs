import { Paper } from '@material-ui/core';
import styled from 'styled-components'

interface WrapperShoppingCartProps {
  open: boolean;
}

export const WrapperShoppingCart = styled(Paper)<WrapperShoppingCartProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  width: 300px;
  height: calc(100vh - 80px);
  position: fixed;
  background-color: white;
  top: 80px;
  right: ${({ open }) => open ? '0px' : '-300px'};
  z-index: 10;
`;

export const WrapperPokemons = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const PokemonCardTitle = styled.div`
  width: 100%;
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
  }
`;
