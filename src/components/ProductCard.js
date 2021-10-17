import React from 'react'

export const ProductCard = ({titulo,imagen}) => {
    
    return (
        <div>
            <img src={ imagen } alt={ titulo} />
            <p>{titulo}</p>
        </div>
    )
}
