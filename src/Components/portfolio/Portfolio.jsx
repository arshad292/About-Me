import React, { useState } from 'react'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import'./portfolio.css'
import shapeOne from '../../assets/shape-1.png'
import { AnimatePresence } from 'framer-motion'

const allNavList =['all', 
...new Set(projects.map((projects) => projects.category))]


const Portfolio = () => {
    const [porjectItems, setMenuItems] = useState(projects)
    const [navList, setCategories] = useState(allNavList)

    const filterItems = (category) => {
      if (category === 'all'){
        setMenuItems(projects)
        return
      }
      
      const newProjectItems = projects.filter((item) => item.
      category === category)

      setMenuItems(newProjectItems)
    }

  return (
    <section className='portfolio section' id='work'>
        <h2 className='section__title tex-cs'>Portfolio</h2>
        <p className='section__subtitle'>
            My <span>Cases</span>
        </p>

        <List list={navList} filterItems={filterItems} />

        <div className="portfolio__container container grid">
            <AnimatePresence initial={false}>
            <Items porjectItems={porjectItems}/>
            </AnimatePresence>
        </div>

        <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className="shape" />
            </div>

            <div className="section__bg-wrapper">
            <span className="bg__title">Portfolio</span>
        </div>
    </section>
  )
}

export default Portfolio