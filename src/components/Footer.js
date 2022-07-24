import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-Icon">
            <BsGithub/>
            <SiLeetcode/>
        </div>
        <div className='contatcs'>
            <span> Email: Rashsih970@gmail.com</span>
        </div>
      
    </div>
  )
}

export default Footer
