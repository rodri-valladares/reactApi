import {useState, useEffect} from 'react'
import { getProducto } from '../helpers/getProduct';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import clienteAxios from '../config/axios';

export const useFetchProduct = (category) => {

    const [state, setState] = useState({  
        data: [],
        loading: true
    });

    useEffect(()=>{

        getProducto(category)
            .then( product =>{

                setState({
                    data: product,
                    loading:false
                });    
            })

    }, [category]);
    
    return state;

}