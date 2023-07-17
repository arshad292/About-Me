import React from 'react'
import './App.css'
import Home from './Components/home/Home'
import Services from './Components/services/Services'
import Skills from './Components/skills/Skills'
import Portfolio from './Components/portfolio/Portfolio'
import Resume from './Components/resume/Resume'
import Testimonials from './Components/testimonials/Testimonials'
import Pricing from './Components/pricing/Pricing'
import Blog from './Components/blog/Blog'

import './App.css'

function App() {

  return (
    <main className='main'>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
    </main>
  )
}

export default App
