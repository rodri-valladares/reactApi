import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { Catalogo } from './components/Catalogo';

export const ReactApi = () => {

    const [categories, setCategories] = useState(['Televisores']);

    /* const handleAdd = () => {
        setCategories(cats =>[...cats, 'NuevaCategoria']);
    } */

    return (
        <>  
            <div className="container">
                
                <AddCategory setCategories={setCategories} />
                
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
            </div>
            
        </>    
        
    )
}
