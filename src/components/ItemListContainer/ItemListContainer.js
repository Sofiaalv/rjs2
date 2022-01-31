import { useEffect, useState } from "react";
import Item from "../Item/Item";

const URL ="http://localhost:3001/productos"

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading (true);
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setProductos(json))
            .catch((err) => setError(err))
            .finally(() => setIsLoading (false));
    }, []);

    if (isLoading){
        return <p>Cargando productos...</p>;
    } else if (error){
        return<p>Ha habido un error {error.message}</p>;
    } else return (
        <div>
            {productos.map((product) => {
                return <Item key = {product.id} product={product} />;
            })}
        </div>
    )

}


export default ItemListContainer;