import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { Catalogo } from './components/Catalogo';

export const ReactApi = () => {

    const [categories, setCategories] = useState(['Televisores']);

    return (
        <>  
            <header>
                

                <div className="container">
                    <h2 >Ucamp Rodrigo</h2>
                    <AddCategory setCategories={setCategories} />
                </div>
                
            </header>
            <div className="container">            
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
