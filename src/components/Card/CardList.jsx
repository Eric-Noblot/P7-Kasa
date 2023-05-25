import React from "react";
import "../../styles/components/Card/card.scss"
//import datas from "../../assets/data/data.json"
import Card from "./Card"

const CardList = ({datas}) => { //jai du mettre {} sinon data etait un objet dans un tableau et mon .map pop une erreur

  return (
    <main className= "card_container">
        {datas.map(({id, title, cover}) => 
         <Card key= {id} id={id} title={title} cover={cover}/>
            )}
    </main>
  )
}

export default CardList


// {datas.map((data) => (
//     const { id, cover, title } = data
// ))}
// <Card id={id} cover={cover} title={title}/>