import Head from "next/head";
import React from "react";
import Menu from "../Menu";
import ShoppingCart from "../ShoppingCart";
import * as S from "./styles";

interface PageWrapperProps {
  title?: string;
  withContainer?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title = "Poké Loja",
  withContainer = true,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu />
      <S.PageWrapper>
        {withContainer ? <S.Container>{children}</S.Container> : children}
        <ShoppingCart />
      </S.PageWrapper>
    </>
  );
};

export default PageWrapper;
