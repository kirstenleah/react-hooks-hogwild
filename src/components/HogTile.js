import React from 'react'

function HogTile({
    name,
    specialty, 
    greased,
    weight,
    image

}) {

    return (
        <div className="tile">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h3>{specialty}</h3>
            <h3>{greased}</h3>
            <h3>{weight}</h3>
        </div>
    )
}

export default HogTile