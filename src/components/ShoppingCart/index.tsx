import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { Delete } from "@material-ui/icons";
import React, { useEffect, useState, forwardRef } from "react";
import { useShoppingCart } from "../../context/ShoppingCart/Context";
import { formatPrice } from "../../utils";
import * as S from "./styles";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShoppingCart: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState(0);
  const { open, pokemonsInCart, removePokemonInCart, cleanCart, toggleOpen } =
    useShoppingCart();

  useEffect(() => {
    let newTotal = 0;

    pokemonsInCart.forEach((poke) => {
      const price = parseFloat(poke.price);

      newTotal += price;
    });

    setTotal(parseFloat(newTotal.toFixed(2)));
  }, [pokemonsInCart]);

  const onClickBuyButton = () => {
    cleanCart();
    setOpenModal(true);
    toggleOpen();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <S.WrapperShoppingCart open={open}>
        <S.WrapperPokemons>
          {pokemonsInCart.map((poke) => (
            <div key={poke.id}>
              <S.PokemonCardTitle>
                <Typography>{poke.name}</Typography>
                <div>
                  <Typography>R$ {formatPrice(poke.price)}</Typography>
                  <IconButton onClick={() => removePokemonInCart(poke.id)}>
                    <Delete />
                  </IconButton>
                </div>
              </S.PokemonCardTitle>
            </div>
          ))}
        </S.WrapperPokemons>

        <div>
          <S.PokemonCardTitle>
            <Typography>Total</Typography>
            <Typography>R$ {formatPrice(total.toString())}</Typography>
          </S.PokemonCardTitle>
          <Button variant="contained" onClick={onClickBuyButton} fullWidth>
            Comprar
          </Button>
        </div>
      </S.WrapperShoppingCart>

      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Muito obrigado!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            condimentum dolor nec accumsan vulputate. Aliquam volutpat velit
            neque, ac porttitor.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShoppingCart;
