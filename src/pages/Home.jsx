import React from 'react';
import "../components/Header/Banner"
import CardList from "../components/Card/CardList"
import Banner from "../components/Header/Banner"

const Home = ({datas}) => {

    return (
        <>
            <Banner bannerClassName={"home"} bannerText={"Chez vous, partout ou ailleurs"} />
            
            <CardList datas={datas} />
        </>
    );
};

export default Home;