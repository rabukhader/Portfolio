import React from 'react'
import './Services.css'
import {BsCheck2Circle} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container servicesContainer">
        <div className="service">
          <div className="head">
            <h3>Front End Side</h3>
          </div>

          <ul className='serviceList'>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Fully HTML, CSS Projects</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Fully Responsive</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Working with CSS Framework (Bootstrap)</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Dynamic Projects</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>JavaScript Native Projects</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Working With JavaScript FrameWork (ReactJs)</p>
            </li>
          </ul>
        </div>

        <div className="service">
          <div className="head">
            <h3>Back End Side</h3>
          </div>

          <ul className='serviceList'>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Learning NodeJs</p>
            </li>
            <li className='iconList'>
              <BsCheck2Circle className='listIcon'/>
              <p>SQL, NoSQL</p>
            </li>
            <li className='iconList'>
              <BsCheck2Circle className='listIcon'/>
              <p>MongoDB</p>
            </li>
            <li className='iconList'>
              <BsCheck2Circle className='listIcon'/>
              <p>Creating Normalized DataBases</p>
            </li>
            <li className='iconList'>
              <BsCheck2Circle className='listIcon'/>
              <p>Building APIs</p>
            </li>
            <li className='iconList'>
              <BsCheck2Circle className='listIcon'/>
              <p>Validation</p>
            </li>
          </ul>
        </div>

        <div className="service">
          <div className="head">
            <h3>Team Work</h3>
          </div>

          <ul className='serviceList'>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Treasurer and Administrative board member in Ieee</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Youth leader and volunteer with many organizations</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Planning & implementing summer camps’ activities </p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Supervised life skills and entertainment activities</p>
            </li>
            <li>
              <BsCheck2Circle className='listIcon'/>
              <p>Youth advisor, supporter and mentor</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services