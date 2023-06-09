import React from 'react';
import "../../styles/components/Loader/loader.scss"

const Loader = () => {
    return (
        <div className="loader__container">
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
            </div>
     </div>
    );
};

export default Loader;