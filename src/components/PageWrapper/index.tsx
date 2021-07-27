import Head from "next/head";
import React from "react";
import Menu from "../Menu";
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
      {withContainer ? <S.Container>{children}</S.Container> : children}
    </>
  );
};

export default PageWrapper;
