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
      <div className="row">
        <div className="card" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="text">
            <h3>{name}</h3>
            <div className="rate">
              <div className="text-uppercase pb-2">
              {description}
              </div>
              <div className="text-uppercase pb-2">
              R$ {price},00
              </div>
              <button type="button" className="btn btn-dark">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card;