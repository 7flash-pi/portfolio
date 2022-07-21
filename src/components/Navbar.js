import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-Container'>
        <div className="navbar-title">
            <h2>Ashish Raj</h2>
        </div>

        <div className='navbar-btn'>
            <button>About Me</button>
            <button className='btn-mid'>Skills</button>
            <button>contacts</button>
        </div>
      
    </div>
  )
}

export default Navbar
