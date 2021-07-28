import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import type { AppProps } from 'next/app'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import IpApi from './api/ipapi';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}
export default MyApp
