import React, { useState } from 'react';
import './index.scss'

const ImageCarousel = ({ images, labels }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='carousel-container'>
            <div className="carousel">
                {images.length > 1 && <button onClick={handlePrev} className="arrow left-arrow">
                    &#9664;
                </button>}
                <div className="image-container">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                </div>
                {images.length > 1 && <button onClick={handleNext} className="arrow right-arrow">
                    &#9654;
                </button>}
            </div>
            <div className='labels'>
                <h3>{labels[currentIndex]}</h3>
            </div>
        </div>
    );
};

export default ImageCarousel;
