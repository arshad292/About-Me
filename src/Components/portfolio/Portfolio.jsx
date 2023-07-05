import React, { useState } from 'react'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import'./portfolio.css'

const allNavList = projects.map((projects) => projects.category)
  

const Portfolio = () => {
    const [porjectItems, setMenuItems] = useState(projects)

  return (
    <section className='portfolio section' id='work'>
        <h2 className='section__title tex-cs'>Portfolio</h2>
        <p className='section__subtitle'>
            My <span>Cases</span>
        </p>

        <List/>

        <div className="portfolio__container container grid">
            <Items porjectItems={porjectItems}/>
        </div>
    </section>
  )
}

export default Portfolio