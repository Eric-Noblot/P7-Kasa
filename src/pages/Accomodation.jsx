import React from "react";
import "../styles/pages/accomodation.scss";
import redStar from "../assets/img/red_star.png"
import greyStar from "../assets/img/grey_star.png"
import Collapse from "../components/Collapse/Collapse"
import Carousel from "../components/Carousel/Carousel"
import Loader from "../components/Loader/Loader"
import Error from "./Error"

import { useParams } from "react-router-dom"; 

const Accomodation = ({datas}) => {

  const idAccomodation  = useParams().id;

  //gestion du rendu initial avec fecth et useEffect
  if (datas.length === 0 ) {
    return (<Loader />)
  }

  const accomodation = datas.find(element => element.id === idAccomodation)

  //si l'utilisateur change manuellement l'id de l'URL
  if (!accomodation) return(<Error />)

  //gestion des étoiles 
  const arrayRating = [1, 2, 3, 4, 5]
  const ratingAccomodation = parseInt(accomodation.rating)

  return (
    <div className="accomodation">

      <Carousel accomodation={accomodation}/>
      
      <div className = "accomodation__box_text">
        <div className="accomodation__text">
            <h2>{accomodation.title}</h2>
            <h3>{accomodation.location}</h3>
            {accomodation.tags.map((tag, index)  => (
              <button type = "button" className="accomodation__button"  key={"button" + index}>{tag}</button>
            ))}
        </div>
        <div className ="accomodation__box_user">
            <div className = "accomodation__flex_user">
              <div className="accomodation__name_user">{accomodation.host.name}</div>
              <img className="accomodation__img_user" src = {accomodation.host.picture} alt ="User picture" />
            </div>
            <div className="accomodation__ratings">

            {arrayRating.map( (number)=> 
            number <= ratingAccomodation ? 
            <img key ={number} src={redStar} alt ="red_star" className="accomodation__star" ></img>   
            : <img key ={number} src={greyStar} alt ="grey_star" className="accomodation__star" ></img>)}
            </div>
        </div>
      </div>

      <div className = "accomodation__collapse">
        <Collapse title= "Description" datas= {accomodation.description} page="description" />
        <Collapse title= "Équipements" datas= {accomodation.equipments} page="equipments" />
      </div>
      </div>
  );
};

export default Accomodation;
