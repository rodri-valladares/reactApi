import React from 'react';
import {useFetchProduct} from '../hooks/useFetchProduct';

import { ProductCard } from './ProductCard';

export const Catalogo = ({category}) => {

    const {data:product, loading} = useFetchProduct(category);
    
    return (
        <>
            <h3 id="titulo" className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            <div className="card-grid">
            
                {
                    product.map( producto => (
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
