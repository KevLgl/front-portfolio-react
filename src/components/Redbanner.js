import React from 'react';
import Typing from 'react-typing-animation';


const Redbanner = () => {
    return (
        <div className="w-3/4 relative">
            <div>
                <img src="/data/redbanner.svg"></img>
            </div>
            <div className="absolute bottom-10">
                <Typing startDelay={3000}>
                    <span className="text-white font-mono text-black text-xl"><p className="transform rotate-7">Ensemble, partageons la même passion</p></span>
                </Typing>
            </div>
        </div>
    )
}

export default Redbanner
