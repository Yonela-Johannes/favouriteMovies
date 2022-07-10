import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import './styles.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ isAuth }) {
  const [ isActive, setIsActive ] = useState(false)

  const active = () => setIsActive(true)

  console.log(isActive)
  return (
    <header>
    <div className='navbar'>
        <div>
                Logo
        </div>
        <div className='navbarMidContainer'>
          <div className='navLink'>
            <NavLink to='/'>
                Home
            </NavLink>
          </div>
          <div className='navLink'>
            <NavLink to='/'>
                Movies
            </NavLink>
          </div>
          <div className='navLink'>
            <NavLink to='/'>
                New & Popular
            </NavLink>
          </div>
          <div className='navLink'>
            <NavLink to='/'>
                My Favourite List
            </NavLink>
          </div>
        </div>

        <div className="navLink signin">
          <NavLink to='/signin'>
            sign/signup
          </NavLink>
        </div>
      </div>
      <div className='searchContainer'>
        <div className={`searchWrapper ${isActive && 'searchActive'}`}>
          <AiOutlineSearch className='icon'/>
          <input onClick={active} placeholder="Search Movie" className='searchInput' />
        </div>
      </div>
    </header>
  )
}

export default Navbar