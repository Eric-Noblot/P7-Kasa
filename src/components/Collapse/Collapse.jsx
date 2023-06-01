import React, { useState, useEffect } from "react";
import "../../styles/components/Collapse/collapse.scss";
import bottomArrow from "../../assets/img/fleche_bas.png";
import topArrow from "../../assets/img/fleche_haut.png";

const Collapse = ({ page, title, datas }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={page}>
      <div
        className={page + "__collapse_box"}
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <h2>{title}</h2>
        {isOpen ? (
          <img className="collapse_img" src={topArrow} alt="flèche du haut" />
        ) : (
          <img className="collapse_img" src={bottomArrow} alt="flèche du bas" />
        )}
      </div>
      {isOpen ? (
        <div className={page + "__collapse_data"}>
          {Array.isArray(datas) ? (
            datas.map((data, index) => {
              return (
                <p key={index} className = {page + "__collapse_text"} style={{ marginTop: "10px", marginBottom :0 }}>
                  {data}
                </p>
              );
            })
          ) : (
            <p className = {page + "__collapse_text"}>{datas}</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Collapse;
