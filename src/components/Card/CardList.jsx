import React from "react";
import "../../styles/components/Card/card.scss"
//import datas from "../../assets/data/data.json"
import Card from "./Card"
import { Link } from "react-router-dom"
import Accomodation from "../../pages/Accomodation"

const CardList = ({datas}) => { //jai du mettre {} sinon data etait un objet dans un tableau et mon .map pop une erreur

  return (
    <main className= "card_container">
        {datas.map(({id, title, cover}) => 
        <Link to={`/accomodation/${id}`} element={<Accomodation />} className="link_accomodation" key={id}> 
         <Card id={id} title={title} cover={cover}/>
         </Link>
            )}
    </main>
  )
}

export default CardList


// {datas.map((data) => (
//     const { id, cover, title } = data
// ))}
// <Card id={id} cover={cover} title={title}/>