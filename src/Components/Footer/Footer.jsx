/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footerLogo'>At The End</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footerSocials">
        <a href="https://www.facebook.com/rasheed.abukhader.5" rel='noreferrer' target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/rasheed_abu_khader/?next=%2F" rel='noreferrer' target='_blank'><AiFillInstagram/></a>
        <a href="https://twitter.com/Rasheed_imad" rel='noreferrer' target='_blank'><BsTwitter/></a>
      </div>

      <div className="copyRight">
        <small>&copy; All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer