import Head from 'next/head'
import Image from 'next/image'
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
          <div className="col-9 d-flex flex-wrap justify-content-between gap-1">
      {filter?.map(pokedex => (
        <div className="col-2 mb-2">
              <Card name={pokedex?.pokemon?.name} type={pokedex?.pokemon?.url} bgImg="https://static-cse.canva.com/blob/183499/IMAGE-1.jpg"/>
              </div>
      ))}
        </div>
      </div>
    </div>
  )
}
