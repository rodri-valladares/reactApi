import React from 'react'

export const ProductCard = ({titulo,imagen,precio}) => {
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ imagen } alt={ titulo} />
            <hr />
            <h3> $ {precio} </h3>
            
            <p>{titulo}</p>
        </div>
    )
}
