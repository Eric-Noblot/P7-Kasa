import React,{ useState } from 'react';
import Header from "../components/Header/Header"
import CardList from "../components/Card/CardList"
import Footer from "../components/Footer/Footer"
// import Loader from "../components/Loader/Loader"

const Home = ({datas}) => {

    const [appartments, setAppartments] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)

console.log(datas)
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
            <CardList datas={datas} />
            <Footer />
        </div>
    );
};

export default Home;