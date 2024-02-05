import React from 'react'
import shapeTwo from '../../assets/shape-2.png'
import shapeOne from '../../assets/shape-1.png'

import { FaCheck, FaArrowRight } from 'react-icons/fa'
import './pricing.css'

const Pricing = () => {
  return (
    <section className='pricing section' id='pricing'>
        <h2 className='section__title text-cs'>Pricing</h2>
        <p className='section__subtitle'>
        My <span>Pricing Board</span>
    </p>

    <div className="pricing__container container grid">

    <div className="pricing__item card card-one">
        <span className="pricing__subtitle text-cs">Hourley Basis</span>
        <h3 className="pricing__price">39 
        <span>$</span> <em>Hour</em></h3>

        <p className='pricing__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum tristique turpis et fermentum. 
        Nulla posuere semper urna non hendrerit. Cras quis sapien ac mi porttitor bibendum condimentum eget lacus. 
        Praesent sit amet elementum dolor. Etiam interdum lectus in odio laoreet tempus. Cras convallis porttitor ligula id accumsan. 
        </p>

        <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Brand Design</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
                <del>Advertising</del>
            </li>

            <li className="list__item">
                <del>Photography</del>
            </li>
        </ul>

        <a href="" className="btn pricing__btn text-cs text-cs">
            Start Project
            <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
        </a>

        <img src={shapeTwo} alt="" className="shape c__shape" />
    </div>

    <div className="pricing__item-wrapper">
        <span className="pricing__label text-cs">Populer</span>
        <div className="pricing__item card card-one">
        <span className="pricing__subtitle text-cs">Freealancing</span>
        <h3 className="pricing__price">259 
        <span>$</span> <em>Week</em></h3>

        <p className='pricing__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum tristique turpis et fermentum. 
        Nulla posuere semper urna non hendrerit. Cras quis sapien ac mi porttitor bibendum condimentum eget lacus. 
        Praesent sit amet elementum dolor. Etiam interdum lectus in odio laoreet tempus. Cras convallis porttitor ligula id accumsan. 
        </p>

        <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Brand Design</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Advertising</span>
            </li>

            <li className="list__item">
                <del>Photography</del>
            </li>
        </ul>

        <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
        </a>

        <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>
    </div>

    <div className="pricing__item card card-one">
        <span className="pricing__subtitle text-cs">Full Time</span>
        <h3 className="pricing__price">1,250 
        <span>$</span> <em>Month</em></h3>

        <p className='pricing__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum tristique turpis et fermentum. 
        Nulla posuere semper urna non hendrerit. Cras quis sapien ac mi porttitor bibendum condimentum eget lacus. 
        Praesent sit amet elementum dolor. Etiam interdum lectus in odio laoreet tempus. Cras convallis porttitor ligula id accumsan. 
        </p>

        <ul className="pricing__list">
            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Brand Design</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Web Development</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Advertising</span>
            </li>

            <li className="list__item">
                <FaCheck className='list__icon'></FaCheck>
                <span>Photography</span>
            </li>
        </ul>

        <a href="" className="btn pricing__btn  ">
            Start Project
            <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
        </a>

        <img src={shapeTwo} alt="" className="shape c__shape" />
    </div>

    </div>

    <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>
    <div className="section__bg-wrapper">
            <span className="bg__title">Pricing</span>
    </div>
    </section>
    )
}

export default Pricing