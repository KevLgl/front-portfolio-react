import { PreviousMap } from 'postcss'
import React from 'react'

const Articlecard = (props) => {
    return (
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" src="images/cardimg.jpg" class="max-h-40 w-full object-cover" />
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-indigo-500 text-md font-medium">
                        {props.title}
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {props.subtitle}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                        {props.content}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Articlecard
