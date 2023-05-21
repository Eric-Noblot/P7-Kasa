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
             <div className = {aboutPage ? "banner_about banner" : "banner_home banner"}>
                <h1 className = "banner_text">Chez vous, partout ou ailleurs</h1>
            </div>
        </div>
    );
}
export default Banner;
