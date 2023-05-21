import React from "react";
import "../../styles/components/Card/card.scss"
import datas from "../../assets/data/data.json"
import Card from "./Card"

const CardList = () => {
  return (
    <div className= "card_container">
        {datas.map(({id, title, cover}) => 

         <Card key= {id} id={id} title={title} cover={cover}/>
            )}
    </div>
  )
}

export default CardList


// {datas.map((data) => (
//     const { id, cover, title } = data
// ))}
// <Card id={id} cover={cover} title={title}/>