import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const style = {
  navbar:
    'fixed w-full h-[80px] flex justify-between item-center px-4 bg-[#0a192f] text-gray-300 ',
  menu: 'flex md:hidden',
  mobileMenu: 'hidden md:flex',
  mobileMenuStyle:
    'absolute top-0 h-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center',
  hamburger: 'flex md:hidden z-10',
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <ul className={toggleMenu ? style.menu : style.mobileMenu}>
      <li> Home </li>
      <li> About </li>
      <li> Skills </li>
      <li> Work </li>
      <li> Contact </li>
    </ul>
  )

  return (
    <div className={style.navbar}>
      <div>
        <img src={Logo} alt="logo image" style={{ width: '50px' }}></img>
      </div>

      {/* {Main Navabr} */}
      <div>
        <Menu />
      </div>

      {/* {Hamburger} */}
      <div
        className={style.hamburger}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {!toggleMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* {Mobile Navbar} */}
      <div className={!toggleMenu ? 'hidden' : style.mobileMenuStyle}>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
