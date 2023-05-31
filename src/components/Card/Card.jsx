import React from "react";
import "../../styles/components/Card/card.scss"

const Card = ({id, cover, title}) => {

  return (
    <div className="card">
      <img src={cover} alt={title} className="card__img"></img>
      <p className="card__title">{title}</p>
    </div>
  );
};

export default Card;
