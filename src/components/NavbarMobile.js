import React, {useState} from 'react'
import { NavLink, } from 'react-router-dom'

const NavbarMobile = () => {

  const [toggle, setToggle] = useState(false)
  const toggleLinks = () => setToggle(!toggle)

  return (
    <>
      {
        toggle ?
        <div className='nav-menu-mobile'>
          <div className='close' onClick={toggleLinks}></div>
          <div className='ul'>
            <NavLink
              className='home-btn li'
              exact
              to='/'
              onClick={toggleLinks}
            >
              <svg className='home-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>home</title>
                <path d='M12 3c0 0-6.186 5.34-9.643 8.232-0.203 0.184-0.357 0.452-0.357 0.768 0 0.553 0.447 1 1 1h2v7c0 0.553 0.447 1 1 1h3c0.553 0 1-0.448 1-1v-4h4v4c0 0.552 0.447 1 1 1h3c0.553 0 1-0.447 1-1v-7h2c0.553 0 1-0.447 1-1 0-0.316-0.154-0.584-0.383-0.768-3.433-2.892-9.617-8.232-9.617-8.232z'></path>
              </svg>
            </NavLink>
            <NavLink
              className='hover underline li'
              exact
              to='/about'
              onClick={toggleLinks}
            >
              About
            </NavLink>
            <NavLink
              className='hover underline li'
              exact
              to='/men_healing'onClick={toggleLinks}

            >
              Men Healing
            </NavLink>
            <NavLink 
              className='hover underline li'
              exact
              to='/inspirations'
              onClick={toggleLinks}
            >
              Instpirations 
            </NavLink>
            <NavLink 
              className='hover underline li'
              exact
              to='/contact'
              onClick={toggleLinks}
            >
              Contact
            </NavLink>
          </div>
        </div>
        :
        <div className='menu-mobile' onClick={toggleLinks}>
          <div className='menu-btn'>Menu</div>
        </div>
      }
    </>
  ) 
}

export default NavbarMobile