import React,{ useEffect, useState } from 'react';
import Header from "../components/Header/Header"
import CardList from "../components/Main/CardList"
import Footer from "../components/Footer/Footer"
// import Loader from "../components/Loader/Loader"

const Home = () => {

    const [appartments, setAppartments] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)

            fetch("http://localhost:3000/data/data.json")
            .then(res => res.json())
            .then(data => setAppartments(data))
            setDataLoading(true)
            .catch(error => "Erreur de connexion avec l'API " + error)    

    },[])
    
    return (
        <div>
            <Header />
            <CardList datas={appartments} />
            <Footer />
        </div>
    );
};

export default Home;