import React from 'react';
import "../../styles/components/Loader/loader.scss"

const Loader = () => {
    return (
        <div class="loader__container">
            <div class="loader">
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
            </div>
     </div>
    );
};

export default Loader;