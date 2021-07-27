import React from 'react'


type Settings= {
  name: string,
  type: string,
  bgImg: string
}

export const Card = ({name, type, bgImg}: Settings) => {
  return (
      <div className="row">
        <div className="card" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="text">
            <h3>{name}</h3>
            <div className="rate">
              <span>{type}</span>
              </div>
            </div>
          </div>
        </div>
    )
}

