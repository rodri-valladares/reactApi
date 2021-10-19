
import clienteAxios from '../config/axios';
export const getProducto = async(category) =>{

    const url =`https://api.mercadolibre.com/sites/MLA/search?q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    const {results} = await resp.json();
    
    const producto = results.map( product =>{
        console.log(product);

        return {
            id: product.id,
            titulo:product.title,
            imagen: product.thumbnail,
            precio:product.price,
            stock:product.available_quantity,
            condicion:product.condition,
            
        }    
    });

    producto.forEach(function(product) {
        clienteAxios.post('/api',product)
            .then(respuesta=>{
                console.log(respuesta)
            });
        });                     
    return producto;
}