import React from 'react';
import "../styles/pages/error.scss"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="error">
                <div className = "error__number">404</div>
                <div className = "error__text">Oups ! La page que vous demandez n'existe pas.</div>
                <Link to="/" className = "error__link">Retourner sur la page d'accueil</Link>
            </div>
        </>
    );
};

export default Error;