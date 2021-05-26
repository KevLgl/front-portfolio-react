import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Redbanner from './Redbanner';
import Typer from './Typer';

const CarouselSlide = () => {
    return (
        <>
            <div className="relative">
                <AwesomeSlider
                    className="h-96"
                    bullets={false}
                >
                    <div data-src="/images/1.jpeg" />
                    <div data-src="/images/2.jpeg" />
                    <div data-src="/images/3.jpeg" />
                </AwesomeSlider>
                <div className="absolute bottom-0 z-20">
                    <div className="relative">
                        <p className=" absolute bottom-1/3 z-30 transform rotate-7 text-white font-mono text-black text-xl">Ensemble, partageons la même passion</p>
                        <Redbanner />
                    </div>
                </div>
                <div className="absolute top-1/3 left-20 z-20">
                    <Typer />
                </div>
            </div>


        </>
    )
}

export default CarouselSlide
