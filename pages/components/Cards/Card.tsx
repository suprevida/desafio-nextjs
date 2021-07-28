import axios from 'axios'
import React, { useEffect, useState } from 'react'


type Settings= {
  name: string,
  type: string,
  imgUrl: string,
  price: string
}

const Card = ({name, imgUrl, price}: Settings) => {
  const [ bgImg, setBgimg] = useState('')
  const [ description, setDescription] = useState('');

  useEffect(() => {
    async function getUrl(url){
      const response = await axios.get(url);
      setBgimg(response.data.sprites.front_default);
      setDescription(response.data.types.map((u) => u?.type.name));
    }
    getUrl(imgUrl)
  }, [])

  return (
        <div className="card-boz" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="text">
              <div className="top">
                <h3>{name}</h3>
                <span>{description}</span>
              </div>
              <div className="bottom">
                <p className="bolder">R${price},00</p>
                <div className="btn btn-dark">Add to cart</div>
              </div>
            </div>
          </div>
    )
}

export default Card;

// {name} {description} 