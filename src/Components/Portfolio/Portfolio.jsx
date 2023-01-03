import React from 'react'
import './Portfolio.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'

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
    title:'Portfolio - HTML CSS',
    github:'https://github.com/rabukhader/HTML-CSS-Portfolio',
    demo:'https://637e3a728f98a10087c6c07b--deft-cactus-51b276.netlify.app/'
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
    title:'Playing Football - JavaScript',
    github:'https://github.com/rabukhader/Playing-Footbal-',
    demo:'https://rabukhader.github.io/Playing-Footbal-/'
  },
  {
    id:5,
    image:p5,
    title:'Calculator - JavaScript',
    github:'https://github.com/rabukhader/Calculator',
    demo:'https://rabukhader.github.io/Calculator/'
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
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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