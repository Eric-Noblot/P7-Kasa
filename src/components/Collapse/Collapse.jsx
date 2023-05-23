import React from 'react';
import "../../styles/components/Collapse/collapse.scss"
import bottomArrow from "../../assets/img/fleche_bas.png"
import bottomUp from "../../assets/img/fleche_haut.png"

const Collapse = () => {
    return (
        <div className ="collapse">
            <h2 className ="collapse_text">Fiabilité</h2>
            <img className = "collapse_img" src= {bottomArrow} alt= "flèche du bas"/>
        </div>
    );
};

export default Collapse;