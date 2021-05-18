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
            <div className="relative">

                <Carousel slides={slides} autoplay={true} interval={10000} />
                <p className="absolute top-1/4 left-1/4 text-secondary font-bold text-4xl">Enssemble,</p>
                <p className="absolute top-2/4 left-1/4 text-secondary font-bold text-4xl">partageons</p>
                <p className="absolute top-3/4 left-1/4 text-secondary font-bold text-4xl">la même passion</p>
            </div>
        </div>
    )
}

export default CarouselSlide
