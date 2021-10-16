import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const ReactApi = () => {

    const [categories, setCategories] = useState(['Celulares', 'Televisores']);

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
                   categories.map( category =>{
                       return <li key={category}>{category}</li>
                   }) 
                }
            </ol>
        </>    
        
    )
}
