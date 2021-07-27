import Head from "next/head";
import React from "react";
import Menu from "../Menu";

interface PageWrapperProps {
  title?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title = "Poké Loja",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu />
      {children}
    </>
  );
};

export default PageWrapper;
