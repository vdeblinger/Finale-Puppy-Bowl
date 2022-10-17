import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav id="navbar-container">
            <Link to="puppies">ALL PUPPIES/</Link>
            <Link to="settings">SETTINGS/</Link>
            <Link to="about">ABOUT US</Link>

        </nav>
    )
}

export default NavBar