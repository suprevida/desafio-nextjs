import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import IpApi from './api/ipapi';
import PokeApi from './api/pokeapi';
import Card from './components/Cards/Card';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar'



export default function Home() {
  const { data , loading } =  PokeApi();
  const filter = data?.pokemon;


  return (
    <>
      <div className="container overflow-hidden">
        {loading && <h1>Loading...</h1>}
        <div className="my-5 text-uppercase text-bold olhaqui"/>
        <div className="d-flex flex-row justify-content-between">
          <Cart />
            <div className="col-md-9">
              <div className="row g-4">
                {filter?.map(pokedex => (
                  <div className="col-4" key={pokedex?.pokemon?.name}>
                  <Card name={pokedex?.pokemon?.name}
                  type={pokedex?.pokemon?.url}
                  imgUrl={pokedex?.pokemon?.url}
                  price={`${pokedex?.pokemon?.name.length * 25}`}/>
                  </div>
                  ))}
              </div>
           </div>
          </div>
        </div>
    </>
  )
}
