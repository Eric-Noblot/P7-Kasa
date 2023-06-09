import React from 'react';
import "../../styles/components/Header/banner.scss"

const Banner = ({bannerClassName, bannerText}) => {

    return (
        <div className = "baner_container">
            <div className = {`banner_${bannerClassName} banner`}>
            <h1 className = "banner_text">{bannerText}</h1></div>
        </div>
    );
}
export default Banner;
