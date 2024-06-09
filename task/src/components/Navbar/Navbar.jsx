import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
          
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/About">About Us</NavLink>
                </li>

                <li>
                    <NavLink to="/Partner">Partner With <br /> Us</NavLink>
                </li>

                <li>
                    <NavLink to="/OurStores">Our Stores</NavLink>
                </li>

                <li>
                    <NavLink to="Blogs">Blogs</NavLink>
                </li>

                <li>
                    <NavLink to="Contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar