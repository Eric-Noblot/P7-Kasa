import React from 'react';
import Header from "../components/Header/Header"
import CardList from "../components/Card/CardList"
 
const Home = ({datas}) => {

    return (
        <>
            <Header />
            <CardList datas={datas} />
        </>
    );
};

export default Home;