import React,{ useState } from 'react';
import Header from "../components/Header/Header"
import CardList from "../components/Card/CardList"
 
const Home = ({datas}) => {

    return (
        <div>
            <Header />
            <CardList datas={datas} />
        </div>
    );
};

export default Home;