import React,{ useEffect, useState } from 'react';
import Header from "../components/Header/Header"
import CardList from "../components/Card/CardList"
import Footer from "../components/Footer/Footer"
// import Loader from "../components/Loader/Loader"

const Home = () => {

    const [appartments, setAppartments] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        // setDataLoading(true)

            fetch("http://localhost:3000/data/data.json")
            .then(res => res.json())
            .then(data => setAppartments(data))
            // setDataLoading(true)
            .catch(error => "Erreur de connexion avec l'API " + error)    

    },[])
//     useEffect(() => {
//     setDataLoading(true)
//     fetch("http://localhost:3000/data/data.json")
//     .then((response) => response.json())
//     .then(({ surveyData }) => {
//     setSurveyData(surveyData)
//     setDataLoading(false)
//     })
// }, [])
    return (
        <div>
            <Header />
            <CardList datas={appartments} />
            <Footer />
        </div>
    );
};

export default Home;