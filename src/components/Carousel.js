import React from 'react'
import { Carousel } from '3d-react-carousal';

const CarouselSlide = () => {
    let slides = [
        <img src="images/carousel-1.jpg" alt="1" />,
        <img src="images/carousel-1.jpg" alt="2" />,
        <img src="images/carousel-1.jpg" alt="3" />,
        <img src="images/carousel-1.jpg" alt="4" />,
        <img src="images/carousel-1.jpg" alt="5" />,
        <img src="images/carousel-1.jpg" alt="6" />];

    return (
        <div>
            <Carousel slides={slides} autoplay={true} interval={10000} />
        </div>
    )
}

export default CarouselSlide
