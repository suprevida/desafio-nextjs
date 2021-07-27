import "../styles/globals.css";
import type { AppProps } from "next/app";
import SearchInputProvider from "../context/SearchInput/Provider";
import ShoppingCartProvider from "../context/ShoppingCart/Provider";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchInputProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </SearchInputProvider>
  );
}
export default MyApp;
