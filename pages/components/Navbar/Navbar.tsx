import React from 'react'
import Image from 'next/image'
import IpApi from '../../api/ipapi';
import logo from '../../../public/logo.svg'
import user from '../../../public/assets/user.jpg'


const Navbar = () => {
  const { ip } = IpApi();
  const getRegion = ip?.regionName;

  return (
    <div className="bg-blue">
      <nav className="container">
        <div className="row">
          <div className="py-2 d-flex justify-content-between align-items-center">
            <div className="logo d-flex justify-content-between align-items-center">
              <Image src={logo} alt="Pokedex Store" height={30} width={30}/>
              <h3>PokéSale</h3>
            </div>
            <div className="api">
              {getRegion}
            </div>
            <div className="user">
            <Image src={user} alt="User" height={30} width={30} className="userImage"/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
