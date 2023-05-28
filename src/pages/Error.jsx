import React from 'react';
import "../styles/pages/error.scss"
import { NavLink } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <div className="error">
                <div className = "error__number">404</div>
                <div className = "error__text">Oups ! La page que vous demandez n'existe pas.</div>
                <NavLink to="/" className = "error__link">Retourner sur la page d'accueil</NavLink>
            </div>
        </div>
    );
};

export default Error;