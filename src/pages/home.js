import React from 'react'
import Articlecard from '../components/Articlecard'
import CarouselSlide from '../components/Carousel'
import Lesmatchcontent from '../components/Lesmatchcontent'
import Nosarticlestitle from '../components/Nosarticlestitle'
import Lesmatchstitle from '../components/Lesmatchstitle'


const Home = () => {
    return (
        <>
            <div>

                <div className="h-1/2">
                    <CarouselSlide />
                </div>
                <div className="flex flex-wrap align-center justify-center mt-6">
                    <Lesmatchstitle />
                </div>
                <div className="mt-12 flex flex-wrap align-center justify-center">
                    <div className="mb-6 mx-3">
                        <Lesmatchcontent />
                    </div>
                    <div className="mb-6 mx-3">
                        <Lesmatchcontent />
                    </div>
                </div>
                <div className="flex flex-wrap align-center justify-center mt-2">
                    <Nosarticlestitle />
                </div>

                <div className="mt-12 flex flex-wrap align-center justify-center">
                    <div className="mb-6 mx-3">
                        <Articlecard title="Titre 1" subtitle="sous-titre 1" content="content 1" />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard title="Titre 2" subtitle="sous-titre 2" content="content 2" />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard title="Titre 3" subtitle="sous-titre 3" content="content 3" />
                    </div>
                    <div className="mb-6 mx-3">
                        <Articlecard title="Titre 4" subtitle="sous-titre 4" content="content 4" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
