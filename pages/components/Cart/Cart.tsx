import Image from 'next/image'
import Card from '../Cards/Card'
import img from '../../../public/assets/user.jpg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

type SetCart= {
  items: any,
}

export const Cart = (cart) => {
  const items = cart.cart
  const onData = cart.cart.map((x) => x.name);
  console.log('ITEMS', onData);
  // console.log(items)

  
    return (
      <>
      <div className="cart">
        <div className="top">
          <div className="title">
            <h2>Cart</h2>
            <hr />
          </div>
          <div className="Buys d-flex justify-content-between align-items-center flex-wrap">

            {items.map((u) => (
              <>
              <div className="info d-flex align-items-center justify-content-between" key={u.name}>
              <img src={u.img} alt={`Imagem de ${u.name}`} />
                  <div className="text mx-2">
                  <p className="m-0">{u.name}</p>
                  <span>R$ {u.price},00</span>
                  </div>
              </div>
                  <button className="btn remove h-100">-</button>
              </>
            ))}

          </div>
        </div>
        <hr />
      <div className="footer">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="m-0">Total</h2>
          <p className="bolder m-0">R$ 150,00</p>
        </div>
        <Link href={`/`}>
            <button className="btn btn-dark purchase" type="submit">Purchase</button>
        </Link>
      </div>
      </div>
      </>
    )
  }
  

export default Cart



