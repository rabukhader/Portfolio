import './App.css';
import React from 'react'
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';


const App = ()=> {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    
    </>

  )
}

export default App;
