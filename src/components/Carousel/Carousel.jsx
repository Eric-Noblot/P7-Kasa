import React, { useState} from 'react';

const Carousel = ({accomodation}) => {

    const [actualPicture, setActualPicture ] = useState(accomodation.cover)
    const [indexActualPicture, setIndexActualPicture] = useState(0)
    const accomodationPictures = accomodation.pictures

    const accomodation__img = {
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        borderRadius: "25px",
        backgroundImage: `url(${actualPicture})`,
        transition: "1000ms"
      }

    const previousPicture = () => {
        const newIndexPicture = indexActualPicture === 0 ? accomodationPictures.length -1 
        : indexActualPicture -1

        setIndexActualPicture(newIndexPicture)
        setActualPicture(accomodationPictures[newIndexPicture])
    }

    const nextPicture = () => {
        const newIndexPicture = indexActualPicture === accomodationPictures.length -1 ? 0
        : indexActualPicture +1

        setIndexActualPicture(newIndexPicture)
        setActualPicture(accomodationPictures[newIndexPicture])
    }
    return (

    <div className="accomodation__box_img">
        <div style={accomodation__img}>
            {accomodationPictures.length <= 1 ? null
            : <>
                <div className="right_arrow arrow" onClick={nextPicture}></div>
                <div className="left_arrow arrow" onClick={previousPicture}></div>
            </>
            }
            <div className="accomodation__numbers">{`${indexActualPicture +1} / ${accomodationPictures.length}`}</div>
        </div>
    </div>

    );
};

export default Carousel;