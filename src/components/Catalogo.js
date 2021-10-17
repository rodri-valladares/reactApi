import React from 'react'

export const Catalogo = ({category}) => {

    const getProducto = async() =>{

        const url ='https://api.mercadolibre.com/sites/MLA/search?q=Televisor&limit=2';
        const resp = await fetch(url);
        const {results} = await resp.json();

        const producto = results.map( product =>{
            return {
                id: product.id,
                titulo:product.title,
                imagen: product.thumbnail,
                precio:product.price,
                stock:product.available_quantity,
                condicion:product.condition,
            }    
        })
        console.log(producto);
    }

    getProducto();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
