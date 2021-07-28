import Image from 'next/image'
import Card from '../Cards/Card'
import img from '../../../public/assets/user.jpg'

const Cart = () => {
  return (
    <>
    <div className="cart">
      <div className="top">
        <div className="title">
          <h2>Cart</h2>
          <hr />
        </div>
        <div className="Buys d-flex justify-content-between align-items-center">
          <div className="info d-flex align-items-center">
           <Image src={img} width={50} height={50} />
           <div className="text mx-2">
            <p className="m-0">CHARIZARD</p>
            <span>R$ 150,00</span>
           </div>
          </div>
          <div className="btn remove h-100">D</div>
        </div>
      </div>
      <hr />
    <div className="footer d-flex align-items-center justify-content-between">
      <h2 className="m-0">Total</h2>
      <p className="bolder m-0">R$ 150,00</p>
    </div>
    <div className="btn btn-dark purchase">Purchase</div>
    </div>
    </>
  )
}

export default Cart


{/* <div className="col">
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
    <button className="btn btn-success">Purchase</button>
  </div>
</div>
</div> */}