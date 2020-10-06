import React from 'react'

function Tags(props) {
    var tags = props.tags.map( function(tag, i) {
        return <li>- {tag} </li>
    }
    )
    return ( 
        <div className= "w-1/3 ml-auto bg-gray-500 h-auto" >
            <div className="font-bold text-xl mb-2">Tags</div>
            <ul className="text-grey-500 text-base">{tags}</ul>
        </div>
    )
}
export default Tags