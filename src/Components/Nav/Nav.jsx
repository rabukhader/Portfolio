/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import {BiBook , BiMessageSquareAdd} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './Nav.css'
import {useState} from 'react'

const Nav = () => {

//for activing nav
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}  ><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareAdd/></a>
      </nav>

    </>
  )
}

export default Nav