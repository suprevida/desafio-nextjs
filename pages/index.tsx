import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import IpApi from './api/ipapi';
import PokeApi from './api/pokeapi';
import { Card } from './components/Cards/Card';
import Navbar from './components/Navbar/Navbar'



export default function Home() {
  const { data , loading } =  PokeApi();
  const filter = data?.pokemon;

  


  return (
    <div>
      <Navbar />
      {loading && <h1>Loading...</h1>}
      <div className="container">
        <h1 className="my-5 text-uppercase text-bold row">Pokemons for sale!</h1>
        <div className="d-flex flex-row justify-content-between">

          <div className="col">
            <div className="cart">
              <div className="title">
                <h2>CART</h2>
              </div>
              <div className="item d-flex mb-5">
                <p>Nome</p>
                <span className="ms-5">preço</span>
              </div>
              <div className="purchase">
                <h3>TOTAL</h3>
                <p>R$xxxx,00</p>
                <button>Purchase</button>
              </div>
            </div>
          </div>
                <div className="col-9 d-flex flex-wrap justify-content-between gap-1">
            {filter?.map(pokedex => (
              <div className="col-2 mb-2" key={pokedex?.pokemon?.name}>
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
  )
}
