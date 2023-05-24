import React from 'react';
import NavBar from "../components/Header/NavBar"
import "../styles/pages/error.scss"

const Error = () => {
    return (
        <div>
            <NavBar />
            <div className="error_container">
                <div className = "error_number">404</div>
                <div className = "error_text">Oups ! La page que vous demandez n'existe pas.</div>
                <div className = "error_link">Retourner sur la page d'accueil</div>
            </div>
        </div>
    );
};

export default Error;