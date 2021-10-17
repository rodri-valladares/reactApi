import React, {useState, useEffect} from 'react'
import { ProductCard } from './ProductCard';

export const Catalogo = ({category}) => {

    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        getProducto();
    }, [])

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
        setProductos(producto);
    }

    

    return (
        <div>
            <h3>{category}</h3>
            
            {
                productos.map( producto => (
                    <ProductCard 
                        key={producto.id}
                        {...producto}
                    />

                ))
            }
            
        </div>
    )
}
