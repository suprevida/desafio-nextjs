import axios from 'axios'
import React, { useEffect, useState } from 'react'


type Settings= {
  name: string,
  type: string,
  imgUrl: string,
  price: string,
  addToCart: any
}

const Card = ({name, imgUrl, price, addToCart}: Settings) => {
  const [ bgImg, setBgimg] = useState('')
  const [ description, setDescription] = useState('');

  useEffect(() => {
    async function getUrl(url){
      const response = await axios.get(url);
      setBgimg(response.data.sprites.other["official-artwork"].front_default);
      setDescription(response.data.types.map((u) => u?.type.name));
    }
    getUrl(imgUrl)
  }, [])

  //Click to add
  function handleClick() {
    const pokemon:any = {
        price: parseInt(price),
        name,
        description,
        img: bgImg
    }
    addToCart(pokemon)
  }

  return (
        <div className="card-boz" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="text">
              <div className="top">
                <h3>{name}</h3>
                <span>{description}</span>
              </div>
              <div className="bottom">
                <p className="bolder">R${price},00</p>
                <button className="btn btn-dark" onClick={handleClick} type="submit">Add to cart</button>
              </div>
            </div>
          </div>
    )
}

export default Card;