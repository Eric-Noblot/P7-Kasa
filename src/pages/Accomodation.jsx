import React from "react";
import "../styles/pages/accomodation.scss";
import redStar from "../assets/img/red_star.png"
import greyStar from "../assets/img/grey_star.png"
import Collapse from "../components/Collapse/Collapse"
import { useEffect } from "react";

const Accomodation = () => {


  return (
    <div className="accomodation_container">
      <div className="accomodation_box_img">
        <div className="accomodation_img">
          <div className="fleche_gauche"></div>
          <div className="fleche_droite"></div>
          <div className="accomodation_numbers">1/5</div>
        </div>
      </div>
      <div className = "accomodation_box_text">
        <div className="accomodation_text">
            <h2 className="accomodation_title">Cosy loft on the Canal Saint Martin</h2>
            <h3 className="accomodation_location">Paris, Ile de France</h3>
            <button type = "button" className="accomodation_button">boutons</button>
        </div>
        <div className ="accomodation_user">
            <div className="accomodation_name_user">Nathalievd Jean</div>
            <img className="accomodation_img_user" src = "" alt ="" />
            <div className="accomodation_ratings">
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={redStar} alt ="red_star" className="star" ></img>
                <img src={greyStar} alt ="grey_star" className="star" ></img>
                <img src={greyStar} alt ="grey_star" className="star" ></img>
            </div>
        </div>
      </div>
      <div className = "accomodation_collapse">
        <Collapse title= "De" description= "Bla frslgf rdgrdgd gdltdgtdgbdg fdlgtd gtldg bdl" page="accomodation" />
        <Collapse title= "De" description= "Bla frslgf rdgrdgd gdltdgtdgbdg fdlgtd gtldg bdl" page="accomodation" />
      </div>
    </div>
  );
};

export default Accomodation;
