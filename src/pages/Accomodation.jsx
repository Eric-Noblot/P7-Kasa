import React from "react";
import "../styles/pages/accomodation.scss";
import redStar from "../assets/img/red_star.png"
import greyStar from "../assets/img/grey_star.png"
import Collapse from "../components/Collapse/Collapse"
import Carousel from "../components/Carousel/Carousel"
import Error from "./Error"
import { useParams } from "react-router-dom";


const Accomodation = ({datas}) => {

  const idAccomodation  = useParams().id;
  const accomodation = datas.find(element => element.id === idAccomodation)
  if (!accomodation) return(<Error />)

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
            <div className="accomodation__name_user">{accomodation.host.name}</div>
            <img className="accomodation__img_user" src = {accomodation.host.picture} alt ="User picture" />
            <div className="accomodation__ratings">

            {arrayRating.map( (number)=> 
            number <= ratingAccomodation ? 
            <img key ={number} src={redStar} alt ="red_star" className="star" ></img>   
            : <img key ={number} src={greyStar} alt ="grey_star" className="star" ></img>)}
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
