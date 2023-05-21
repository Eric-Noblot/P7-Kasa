import React from "react";
import "../../styles/components/Card/card.scss"

const Card = ({id, cover, title}) => {
console.log("id", id)
console.log("cover", cover)
console.log("title", title)

  return (
    <div className="card">
      <img src={cover} alt={title} className="card_img"></img>
      <p className="title_card">{title}</p>
    </div>
  );
};

export default Card;
