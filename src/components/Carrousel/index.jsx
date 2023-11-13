import React, { useState } from 'react';
import './carrousel.scss'

const Carrousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel">
      <img className='carrousel__img' src={items[currentIndex]} alt="" />
      {items.length > 1 && (
        <>
        <button className='carrousel__btnGauche' onClick={goToPreviousSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
        </button>
        <p className='carrousel__nbr'>{currentIndex + 1}/{items.length}</p>
        <button className='carrousel__btnDroit' onClick={goToNextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
        </button>
        </>
      )}
    </div>
  );
};

export default Carrousel;