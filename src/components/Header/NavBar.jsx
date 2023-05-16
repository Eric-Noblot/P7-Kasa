import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import Home from "../../pages/Home"
import About from "../../pages/About"
import "../../styles/components/Header/navBar.scss"


const NavBar = () => {
    return (
        <div className  = "navContainer">
            <img src ={Logo} alt= "NavLogo" class= "navLogo"/>
            <NavLink to="/" element={<Home />} className = {(nav) => (nav.isActive ? "nav-active" : "navLink")}>Accueil</NavLink>
            <NavLink to="/about" element={<About />} className = {(nav) => (nav.isActive ? "nav-active" : "navLink")}>À propos</NavLink>
        </div>
    )
}

export default NavBar