import React, {useState, useEffect} from 'react'
import { getProducto } from '../helpers/getProduct';
import { ProductCard } from './ProductCard';

export const Catalogo = ({category}) => {

    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        getProducto( category)
            .then( product => setProductos(product))
    }, [])

    

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
