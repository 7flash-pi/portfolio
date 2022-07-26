import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode, SiInstagram } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-Icon">
           <a href="https://github.com/7flash-pi">  <BsGithub /> </a>
            <a href="https://leetcode.com/7lash/"><SiLeetcode className='icons-margin'/></a>
            <a href="#"><SiInstagram/></a>
            <span>Email: Rashsih970@gmail.com</span>
            <span>Github: https://github.com/7flash-pi</span>
        </div>
      
    </div>
  )
}

export default Footer
