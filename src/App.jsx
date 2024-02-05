import React from 'react'
import './App.css'
import Home from './Components/home/Home'
import Services from './Components/services/Services'
import Skills from './Components/skills/Skills'
import Portfolio from './Components/portfolio/Portfolio'
import Resume from './Components/resume/Resume'
import Pricing from './Components/pricing/Pricing'
import Blog from './Components/blog/Blog'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import './App.css'

function App() {

  return (
    <main className='main'>
      <Header/>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Pricing/>
      <Blog/>
      <Contact/> 
      <Footer/>
    </main>
  )
}

export default App
