import React from 'react';
import "../../styles/components/Footer/footer.scss"
import Logo from "../../assets/img/logo_noir.webp"

const Footer = () => {
    return (
        <div className = "footer_container">
            <img className = "footer_img" src = {Logo} alt = "logo_Kaza" />
            <p className = "footer_text">2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;