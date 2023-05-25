import React from "react";
import "../styles/pages/accomodation.scss";
import redStar from "../assets/img/red_star.png"
import greyStar from "../assets/img/grey_star.png"
import Collapse from "../components/Collapse/Collapse"
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Accomodation = ({datas}) => {

  const idAccomodation  = useParams().id;
  const accomodation = datas.find(element => element.id === idAccomodation)


  return (
    <div className="accomodation">
      <div className="accomodation__box_img">
        <div className="accomodation__img">
          <div className="fleche_gauche"></div>
          <div className="fleche_droite"></div>
          <div className="accomodation__numbers">1/5</div>
        </div>
      </div>
      <div className = "accomodation__box_text">
        <div className="accomodation__text">
            <h2>{accomodation.title}</h2>
            <h3>{accomodation.location}</h3>
            {accomodation.tags.map((tag)  => (
              <button type = "button" className="accomodation__button">{tag}</button>
            ))}
        </div>
        <div className ="accomodation__box_user">
            <div className="accomodation__name_user">{accomodation.host.name}</div>
            <img className="accomodation__img_user" src = {accomodation.host.picture} alt ="User picture" />
            <div className="accomodation__ratings">
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={greyStar} alt ="grey_star" className="star" ></img>
                <img src={greyStar} alt ="grey_star" className="star" ></img>
            </div>
        </div>
      </div>
      <div className = "accomodation__collapse">
        <Collapse title= "Description" description= {accomodation.description} page="accomodation" />
        <Collapse title= "Équipements" description= {accomodation.equipments} page="equipments" />
      </div>
    </div>
  );
};

export default Accomodation;
