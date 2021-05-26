import React from 'react'
import Articlecard from '../components/Articlecard'
import CarouselSlide from '../components/Carousel'
import Lesmatchcontent from '../components/Lesmatchcontent'


const Home = () => {
    return (
        <>
            <div>

                <div className="h-1/2">
                    <CarouselSlide />
                </div>

                <h2 className="mt-12 text-center font-black font-mono text-primary text-4xl">Les matchs du week-end</h2>
                <div className="mt-12 flex flex-wrap align-center justify-center">
                    <div className="mb-6 mx-3">
                        <Lesmatchcontent />
                    </div>
                    <div className="mb-6 mx-3">
                        <Lesmatchcontent />
                    </div>
                </div>

                <h2 className="mt-12 text-center font-black font-mono text-primary text-4xl">Nos articles</h2>
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
