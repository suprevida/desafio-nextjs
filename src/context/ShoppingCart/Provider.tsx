import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { CartPokemon } from "../../models/Pokemon";
import { KEY_LOCAL_STORAGE_POKEMONS } from "../../utils/localStorageKeys";
import ShoppingCartContext from "./Context";

const SearchInputProvider: React.FC = ({ children }) => {
  const [quant, setQuant] = useState(0);
  const [pokemons, setPokemons] = useState<CartPokemon[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addPokemonInCart = useCallback((pokemon: CartPokemon) => {
    setPokemons((prevPokes) => [...prevPokes, pokemon]);
  }, []);

  const removePokemonInCart = useCallback((idToRemove: number) => {
    setPokemons((prevPokes) =>
      prevPokes.filter((pokemon) => pokemon.id !== idToRemove)
    );
  }, []);

  const cleanCart = useCallback(() => {
    setPokemons([]);
  }, []);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    setQuant(pokemons.length);
  }, [pokemons]);

  useEffect(() => {
    const localStoragePokemons = localStorage.getItem(
      KEY_LOCAL_STORAGE_POKEMONS
    );

    if (!localStoragePokemons) return;

    setPokemons(JSON.parse(localStoragePokemons));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE_POKEMONS, JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <ShoppingCartContext.Provider
      value={{
        quantityInCart: quant,
        pokemonsInCart: pokemons,
        addPokemonInCart,
        removePokemonInCart,
        cleanCart,
        open,
        toggleOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default SearchInputProvider;
