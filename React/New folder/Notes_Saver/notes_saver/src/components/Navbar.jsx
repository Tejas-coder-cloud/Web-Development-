import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 palce-content-evenly'>
      <NavLink
      to="/">
        Home
      </NavLink>
      <br /> <br />
      <NavLink
       to="/pastes">
        Paste
      </NavLink>
    </div>
  )
}

export default Navbar
