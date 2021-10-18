import React, {useState, useEffect} from 'react'
import { ProductCard } from './ProductCard';

export const Catalogo = ({category}) => {

    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        getProducto();
    }, [])

    const getProducto = async() =>{

        const url =`https://api.mercadolibre.com/sites/MLA/search?q=${ encodeURI(category) }&limit=10`;
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
        setProductos(producto);
    }

    return (
        <>
            <h3 id="titulo">{category}</h3>
            <div className="card-grid">
            
                {
                    productos.map( producto => (
                        <ProductCard 
                            key={producto.id}
                            {...producto}
                        />

                    ))
                }
            </div>
        </>
    )
}
