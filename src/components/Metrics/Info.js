import React from 'react'

function Info(props) {
    return(
        <div class= "w-1/3 ml-auto bg-gray-500 h-auto" >
            <div className = "font-bold text-xl mb-2" > Info </div>
            <div><strong>Channnel Title: </strong><span></span></div>
            < ul className = "text-grey-500 text-base" > {props.channelTitle} </ul>

            <div><strong>Video Title: </strong><span></span></div>
            < ul className = "text-grey-500 text-base" > {props.title} </ul>

            <div><strong>Views: </strong><span></span></div>
            < ul className = "text-grey-500 text-base" > {props.views} </ul>
        </div> 
    )
}
export default Info