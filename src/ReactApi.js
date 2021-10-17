import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { Catalogo } from './components/Catalogo';

export const ReactApi = () => {

    const [categories, setCategories] = useState(['Celulares']);

    /* const handleAdd = () => {
        setCategories(cats =>[...cats, 'NuevaCategoria']);
    } */

    return (
        <>
            <h2>Ucamp Rodrigo</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            

            <ol>
                {
                   categories.map( category =>(
                        <Catalogo 
                            key={category} 
                            category={category} 
                        />
                   )) 
                }
            </ol>
        </>    
        
    )
}
