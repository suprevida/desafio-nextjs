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
const [ items, setItems ] = useState<any>(null);
  useEffect(() => {
    const info: any = Object.values(cart).map((u) => u)
    setItems(info)
  }, [])

  console.log(items)

    return (
      <>
      <div className="cart">
        <div className="top">
          <div className="title">
            <h2>Cart</h2>
            <hr />
          </div>
          <div className="Buys d-flex justify-content-between align-items-center">
            <div className="btn remove h-100">-</div>
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



{/* <div className="info d-flex align-items-center">
<Image src={img} width={50} height={50} />
<div className="text mx-2">
 <p className="m-0">Nome</p>
 <span>R$ 150,00</span>
</div>
</div> */}