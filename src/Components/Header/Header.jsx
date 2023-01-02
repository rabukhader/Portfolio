import React from 'react'
import './Header.css'
import CV from '../../assets/(RasheedAbuKhader)CV.pdf'
import ME from '../../assets/my_photo-removebg-preview.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='header'>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Rasheed Abu Khader</h1>
        <h5 className="text-light">
          Full Stack Developer
        </h5>
        <div className='btns'>
          <a href={CV} download className='btn' >Download CV</a>
          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Rasheed Abu Khader" />
        </div>
        <a href="#contact" className='scrollDown'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header