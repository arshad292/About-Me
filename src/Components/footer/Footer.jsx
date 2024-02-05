import React from 'react'
import{ FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/muhammed-arshad-2495361b7/' className='footer__social-link'>
            <FaLinkedin/>
            </a>

            <a href='https://github.com/arshad292' className='footer__social-link'>
            <FaGithub/>
            </a>

            <a href='' className='footer__social-link'>
            <FaTwitter/>
            </a>
        </div>

        <p className="footer__copyright text-cs">
            &copy; 2023 <span>Copyright</span> All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
            Developed by <span>Muhammed Arshad</span>
        </p>
        </div>
    </footer>
  )
}

export default Footer