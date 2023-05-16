import React from 'react';
import "../../styles/components/Header/header.scss"
import NavBar from "./NavBar"
import Banner from "./Banner"

const Header = () => {
    return (    
        <div className = "header">
            <NavBar />
            <Banner />
        </div>
    );
};

export default Header;
