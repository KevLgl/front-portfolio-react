import React from 'react'

const Shoppingcard = (props) => {
    return (
        <div class="shadow-2xl rounded-2xl  bg-white w-64 m-auto p-2">
            <img src={props.imgsrc} alt="adidas" class="w-32 p-4 h-36 m-auto" />
            <div class="bg-primary m-3 p-4 rounded-lg">
                <p class="text-white text-xl font-bold ">
                    {props.title}
                </p>
                <p class="text-gray-50 text-xs">
                    {props.description}
                </p>
                <div class="flex items-center justify-between ">
                    <p class="text-white">
                        {props.prix}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Shoppingcard
