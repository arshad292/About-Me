import React from 'react'
import './App.css'
import Home from './Components/home/Home'
import Services from './Components/services/Services'
import Skills from './Components/skills/Skills'
import Portfolio from './Components/portfolio/Portfolio'
import Resume from './Components/resume/Resume'

import './App.css'

function App() {

  return (
    <main className='main'>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
    </main>
  )
}

export default App
