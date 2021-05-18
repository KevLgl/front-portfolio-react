import React from 'react'
import Articlecard from '../components/Articlecard'
import CarouselSlide from '../components/Carousel'

const Home = () => {
    return (
        <>
            <div className="mt-8">
                <div>
                    <CarouselSlide />
                </div>
                <h2 className="mt-12 text-center font-black font-mono text-white text-4xl">Nos articles</h2>
                <div className="mt-12 flex flex-wrap align-center justify-center">
                    <div className="mb-6 mx-3">
                        <Articlecard />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
