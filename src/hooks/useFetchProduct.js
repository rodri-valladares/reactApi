import {useState, useEffect} from 'react'
import { getProducto } from '../helpers/getProduct';

export const useFetchProduct = (category) => {

    const [state, setState] = useState({  
        data: [],
        loading: true
    });

    useEffect(()=>{

        getProducto(category)
            .then( product =>{
                setTimeout( ()=> {
                    setState({
                        data: product,
                        loading:false
                    });
                }, 3000)
            })

    }, [category])
    

    return state;

}