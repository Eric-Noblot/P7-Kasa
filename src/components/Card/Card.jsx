import React from "react";
import "../../styles/components/Card/card.scss"

const Card = ({cover, title}) => {

  return (
    <article className="card">
      <img src={cover} alt={title} className="card__img"></img>
      <div className = "card__filter"></div>
      <p className="card__title">{title}</p>
    </article>
  );
};

export default Card;
