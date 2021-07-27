import React, { useContext } from "react";
import { CartPokemon, ResumePokemon } from "../../models/Pokemon";

interface ShoppingCartContextType {
  quantityInCart: number;
  pokemonsInCart: CartPokemon[];
  addPokemonInCart(pokemon: CartPokemon): void;
  removePokemonInCart(idToRemove: number): void;
  cleanCart(): void;
  toggleOpen(): void;
  open: boolean;
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  quantityInCart: 0,
  pokemonsInCart: [],
  addPokemonInCart: () => {},
  removePokemonInCart: () => {},
  cleanCart: () => {},
  toggleOpen: () => {},
  open: false,
});

export default ShoppingCartContext;
export const useShoppingCart = () => useContext(ShoppingCartContext);
