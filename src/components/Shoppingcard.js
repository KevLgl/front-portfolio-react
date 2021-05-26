import React from 'react'

const Shoppingcard = () => {
    return (
        <div class="shadow-2xl rounded-2xl  bg-white w-64 m-auto p-2">
            <img src="/images/maillot.png" alt="adidas" class="w-32 p-4 h-36 m-auto" />
            <div class="bg-primary m-3 p-4 rounded-lg">
                <p class="text-white text-xl font-bold ">
                    Adidas
        </p>
                <p class="text-gray-50 text-xs">
                    Live your dream
        </p>
                <div class="flex items-center justify-between ">
                    <p class="text-white">
                        $98.00
            </p>
                </div>
            </div>
        </div>

    )
}

export default Shoppingcard
