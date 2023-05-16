import React from 'react';
import "../../styles/components/Header/banner.scss"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

const Banner = () => {

    const [aboutPage, setAboutPage] = useState(false)

    const location = useLocation()
    const activePage = location.pathname

    useEffect(() => {
		if(activePage === '/about'){
			setAboutPage(true)
		};
    },[])

    return (
        <div>
             <div className = {aboutPage ? "bannerAbout banner" : "bannerHome banner"}>
                <h1 className = "bannerText">Chez vous, partout ou ailleurs</h1>
            </div>
        </div>
    );
}
export default Banner;
