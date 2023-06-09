import React from 'react';
import "../components/Header/Banner"
import CardList from "../components/Card/CardList"
import Banner from "../components/Header/Banner"

const Home = ({datas}) => {

    return (
        <>
            <div class = "baner_container">
                <Banner>
                    <div className = "banner_home banner">
                    <h1 className = "banner_text">Chez vous, partout ou ailleurs</h1></div>
                </Banner>
            </div>
            <CardList datas={datas} />
        </>
    );
};

export default Home;