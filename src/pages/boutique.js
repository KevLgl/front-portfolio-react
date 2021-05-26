import React from 'react'
import Headerboutique from '../components/Headerboutique'
import Shoppingcard from '../components/Shoppingcard'

const Boutique = () => {
    return (
        <div>
            <Headerboutique />
            <div className="mt-12 flex flex-wrap align-center justify-center">
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard />
                </div>
            </div>
        </div>
    )
}

export default Boutique
