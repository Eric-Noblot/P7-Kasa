import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import About from "../../pages/About"
import "../../styles/components/Header/navBar.scss"
import Accomodation from "../../pages/Accomodation"


const NavBar = () => {
    return (

        <nav className  = "nav"> 
            <img src ={Logo} alt= "nav logo" className= "nav__logo"/>
            <NavLink to="/" element={<Accomodation />} className = {(nav) => (nav.isActive ? "nav__link nav__active" : "nav__link")}>Accueil</NavLink>
            <NavLink to="/about" element={<About />} className = {(nav) => (nav.isActive ? "nav__link nav__active" : "nav__link")}>À propos</NavLink>
        </nav>
    )
}
export default NavBar