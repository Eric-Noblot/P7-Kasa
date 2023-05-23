import React, { useState } from "react";
import "../../styles/components/Collapse/collapse.scss";
import bottomArrow from "../../assets/img/fleche_bas.png";
import topArrow from "../../assets/img/fleche_haut.png";

const Collapse = ({title, description}) => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (

    <div className="collapse_container">
      <div className="collapse_box" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
        <h2 className="collapse_text">{title}</h2>
        { isOpen ? 
        <img className="collapse_img"  src= {topArrow} alt="flèche du haut" /> :
        <img className="collapse_img"  src= {bottomArrow} alt="flèche du bas" />
        }
      </div>
      { isOpen ? 
      <div className="collapse_description">
        <p>{description}</p>
      </div>
        : null}
    </div>
  );
};

export default Collapse;
