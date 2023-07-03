import React from 'react'
import './About.css'
import ME from '../../assets/ME.JPG'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container containerAbout">
        <div className="aboutMe">
          <img src={ME} alt="About" />
        </div>
        <div className="aboutContent">
          <div className="cards">
            <div className="card">
              <BsAward className='aboutIcon'/>
              <h5>Experience</h5>
              <h6>2 Years</h6>
            </div>
            <div className="card">
              <FiUsers className='aboutIcon'/>
              <h5>Team Worker</h5>
              <h6>100+ works with</h6>
            </div>
            <div className="card">
              <VscFolderLibrary className='aboutIcon'/>
              <h5>Projects</h5>
              <h6>20+ completed Projects</h6>
            </div>
          </div>
          <p>Energetic, ,Self Learner, hardworking, reliable, and mature high-school graduate, with exceptional communication and organizational skills, an efficient team player with ability to cooperate with others.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About