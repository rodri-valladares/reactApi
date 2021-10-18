export const getProducto = async(category) =>{

    const url =`https://api.mercadolibre.com/sites/MLA/search?q=${ encodeURI(category) }&limit=10`;
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
    
    return producto;
}