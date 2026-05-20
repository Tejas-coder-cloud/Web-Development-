import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li >
                    <NavLink to="/" className={({isActive})=>
                        isActive?"active-link":"passive-link"}>Home Page </NavLink>
                </li>
                <li>
                    < NavLink to="/about"  className={({isActive})=>
                        isActive?"active-link":"passive-link"}>About Page</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive})=>
                        isActive?"active-link":"passive-link"} >Dashboard Page</NavLink>    
                </li>
            </ul>
        </div>
    )
}

export default Navbar
