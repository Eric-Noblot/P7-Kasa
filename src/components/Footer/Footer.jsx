import React from 'react';
import "../../styles/components/Footer/footer.scss"
import Logo from "../../assets/img/logo_noir.webp"

const Footer = () => {
    return (
        <footer className = "footer">
            <img className = "footer__img" src = {Logo} alt = "logo_Kaza" />
            <p className = "footer__text">2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;