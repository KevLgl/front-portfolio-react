import React from 'react'
import Smallredbanner from './Smallredbanner'

const Headerboutique = () => {
    return (
        <div className="relative">
            <div className="absolute">
                <Smallredbanner />
            </div>
            <p className="text-white font-mono text-black text-2xl absolute" > Envie de vous habiller au couleurs du club ? </p>
            <img alt="header shoppingpage" src="images/header-boutique.png" class="max-h-40 w-full object-cover" />
        </div>
    )
}

export default Headerboutique
