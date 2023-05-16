import React from 'react';
import "../../styles/components/Header/header.scss"
import NavBar from "./NavBar"
import Title from "./Title"

const Header = () => {
    return (    
        <div className = "header">
            <NavBar />
            <Title />
        </div>
    );
};

export default Header;