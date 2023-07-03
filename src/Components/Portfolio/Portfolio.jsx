/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Portfolio.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/balance-scale.png'
import p5 from '../../assets/Group 30 (1).png'
import p6 from '../../assets/file-chart.png'

const data = [
  {
    id:1,
    image:p1,
    title:'Medical Center - HTML CSS',
    github:'https://github.com/rabukhader/Medical-Center',
    demo:'https://rabukhader.github.io/Medical-Center/'
  },
  {
    id:2,
    image:p2,
    title:'Intelligent Chatbot - Front End Part ',
    github:'https://github.com/rabukhader/ChatBot-FrontEnd',
    demo:'https://github.com/rabukhader/ChatBot-FrontEnd'
  },
  {
    id:3,
    image:p3,
    title:'Trends WebSite - API, ReactJs',
    github:'https://github.com/rabukhader/Trends',
    demo:'https://trendsreact.onrender.com'
  },
  {
    id:4,
    image:p4,
    title:'Shopping List',
    github:'https://github.com/rabukhader/Shopping-List',
    demo:'https://github.com/rabukhader/Shopping-List'
  },
  {
    id:5,
    image:p5,
    title:'Master Class Mobile App',
    github:'https://github.com/rabukhader/Master_Class',
    demo:'https://github.com/rabukhader/Master_Class'
  },
  {
    id:6,
    image:p6,
    title:'CRUD (To Do LIST) - ReactJs',
    github:'https://github.com/rabukhader/To-Do-List--react',
    demo:'https://todolistreact.onrender.com/'
  }
]
const Portfolio = () => {


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {
          data.map(({id,image, title, github , demo}) => {
            return (
              <div key={id} className="item">
          <div className="itemImg">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='cta'>
            <a href={github} rel='noreferrer' className='btn' target='_blank'>Github</a>
            <a href={demo} rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
            )
          })
        }
        
        
        
      </div>
    </section>
  )
}

export default Portfolio