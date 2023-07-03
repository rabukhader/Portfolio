import React from 'react'
import {BsLinkedin , BsInstagram , BsFacebook} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className="headerSocial">
        <a href="https://www.linkedin.com/in/rasheed-abu-khader-92a4441b5/" rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rabukhader" rel='noreferrer' target="_blank"><GoMarkGithub/></a>
        <a href="https://www.instagram.com/rasheed_abu_khader/" rel='noreferrer' target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/rasheed.abukhader.5/" rel='noreferrer' target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials