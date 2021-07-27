import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar,
  Badge,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import * as S from "./styles";
import IPAPIService from "../../services/IPAPI";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { useSearchField } from "../../context/SearchInput/Context";
import { useShoppingCart } from "../../context/ShoppingCart/Context";

const Menu: React.FC = () => {
  const { searchField, setSearchField } = useSearchField();
  const { quantityInCart, toggleOpen } = useShoppingCart();
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { data } = await IPAPIService.getLocation();
        setLocation(data.city);
      } catch (error) {
        console.log(error);
      }
    };

    getLocation();
  }, []);

  return (
    <S.WrapperNav>
      <S.Nav>
        <Grid container>
          <Grid item container xs={2} alignItems="center">
            <Link href="/" passHref>
              <a>
                <Image src="/img/logo.png" width="50" height="50" alt="logo" />
              </a>
            </Link>
          </Grid>
          <Grid item container xs={4} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Buscar um Pokémon"
                margin="normal"
                variant="outlined"
                color="secondary"
                fullWidth
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                InputProps={{ type: "search" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid
            item
            container
            xs={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography>{location}</Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid
            item
            container
            xs={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Badge badgeContent={quantityInCart} color="secondary">
              <IconButton onClick={toggleOpen}>
                <LocalGroceryStoreIcon />
              </IconButton>
            </Badge>
          </Grid>
          <Grid
            item
            container
            xs={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Avatar>H</Avatar>
          </Grid>
        </Grid>
      </S.Nav>
    </S.WrapperNav>
  );
};

export default Menu;
