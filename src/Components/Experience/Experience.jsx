import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experienceContainer">
        <div className="front">
          <h3>Frontend Development</h3>
            <div className="content">
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>C++</h4>
                  <h6 className='text-light'>Experienced</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>HTML</h4>
                  <h6 className='text-light'>Experienced</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>CSS</h4>
                  <h6 className='text-light'>Experienced</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <h6 className='text-light'>Intermidiate</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <h6 className='text-light'>Intermidiate</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <h6 className='text-light'>Experienced</h6>
                </div>
              </div>
              <div className="detail">
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>Java</h4>
                  <h6 className='text-light'>Intermidiate</h6>
                </div>
              </div>
            </div>
        </div>
        <div className="back">
          <h3>Backend Development</h3>
          <div className="content">
            <div className="detail">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>NodeJs</h4>
                <h6 className='text-light'>Intermidiate</h6>
              </div>
            </div>
            <div className="detail">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>SQL</h4>
                <h6 className='text-light'>Intermidiate</h6>
              </div>
            </div>
            <div className="detail">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>MongoDB</h4>
                <h6 className='text-light'>Begginer</h6>
              </div>
            </div>
            <div className="detail">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>ASP.Net core</h4>
                <h6 className='text-light'>Begginer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience