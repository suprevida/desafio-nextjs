import React from 'react'
import Image from 'next/image'
import IpApi from '../../api/ipapi';
import logo from '../../../public/assets/poke-logo.jpg'
import user from '../../../public/assets/user.jpg'


const Navbar = () => {
  const { ip } = IpApi();
  const getRegion = ip?.regionName;

  return (
    <div>
      <nav className="container">
        <div className="row">
          <div className="py-2 d-flex justify-content-between align-items-center">
              <Image src={logo} alt="Pokedex Store" height={30} width={30}/>
              {getRegion}
            <Image src={user} alt="User" height={30} width={30} className="userImage"/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
