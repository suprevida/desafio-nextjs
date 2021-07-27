import Head from 'next/head'
import Image from 'next/image'
import IpApi from './api/ipapi';
import PokeApi from './api/pokeapi'


export default function Home() {
  const { data , loading } =  PokeApi();
  // const { ip } = IpApi();
  // const getRegion = ip?.regionName;

  console.log(data);
  const filter = data.pokemon;

  return (
    <div>
      Hello World
      {/* {getRegion} */}
      {loading && <h1>Loading...</h1>}
      {filter?.map(pokedex => (<h1>{pokedex?.pokemon?.name}</h1>))}
    </div>
  )
}
