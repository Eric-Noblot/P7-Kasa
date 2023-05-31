import React from "react";
import "../../styles/components/Card/cardList.scss"
import Loader from "../Loader/Loader"
import Card from "./Card"
import { Link } from "react-router-dom"
import Accomodation from "../../pages/Accomodation"

const CardList = ({datas}) => { 
  //gestion du rendu initial davec fecth et useEffect
  if (datas.length === 0 ) {
    return (<Loader />)
  }

  return (
    <main className= "cardList">
        {datas.map(({id, title, cover}) => 
        <Link to={`/accomodation/${id}`} element={<Accomodation />} className="cardList__link" key={id}> 
         <Card id={id} title={title} cover={cover}/>
         </Link>
            )}
    </main>
  )
}

export default CardList
