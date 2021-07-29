import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import PokeApi from './api/pokeapi';
import Card from './components/Cards/Card';
import img from '../public/assets/user.jpg'
import Cart from './components/Cart/Cart';

type PokemonData= {
    price: number,
    name: string,
    description: string,
    img: string,
}

export default function Home() {
  const { data , loading } =  PokeApi();
  const [cart, setCart] = useState({});
  const filter = data?.pokemon;


const addToCart: any = (pokemon: PokemonData) => {
      let tempList:any = cart;
      const alreadyExits = tempList[pokemon.name]

      if(alreadyExits) {
        tempList[pokemon.name].count += 1
      } else {
        const finalData = {
      ...pokemon,
      count: 1,
    }
    tempList[pokemon.name] = finalData
  }
  setCart(tempList)
}

  
  return (
    <>
      <div className="container overflow-hidden">
        {loading && <h1>Loading...</h1>}
        <div className="my-5 text-uppercase text-bold olhaqui"/>
        <div className="d-flex flex-row justify-content-between">
          <Cart cart={cart} />
            <div className="col-md-9">
              <div className="row g-4">
                {filter?.map(pokedex => (
                  <div className="col-4" key={pokedex?.pokemon?.name}>
                  <Card name={pokedex?.pokemon?.name}
                  type={pokedex?.pokemon?.url}
                  imgUrl={pokedex?.pokemon?.url}
                  price={`${pokedex?.pokemon?.name.length * 25}`}
                  addToCart={addToCart}/>
                  </div>
                  ))}
              </div>
           </div>
          </div>
        </div>
    </>
  )
}


