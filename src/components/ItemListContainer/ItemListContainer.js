import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import Item from "../Item/Item";

// const URL ="http://localhost:3001/productos"

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {categoryId} = useParams

    useEffect(() => {
        const db = getFirestore();
        let productsCollection;
        if (categoryId) {
            productsCollection = db.collection("productos").where("categoryId","==", Number(categoryId));
        }else{
            productsCollection = db.collection("productos");
        }
        
        
        const getDataFromFirestone = async () => {            
            setIsLoading(true);
            try{
                const response = await productsCollection.get();
                if (response.empty) console.log("No hay productos");
                
                setProductos(response.docs.map((doc)=> ({...doc.data() , id:doc.id })));
            } catch(err) {
                setError(err);
            } finally{
                setIsLoading(false);
            }
            
        };

        getDataFromFirestone();
    }, [categoryId]);

    if (isLoading){
        return <p>Cargando productos...</p>;
    } else if (error){
        return<p>Ha habido un error {error.message}</p>;
    } else return (
        <div>
            <h1>Categoria: {categoryId}</h1>
            {productos.map((product) => {
                return <Item key = {product.id} product={product} />;
            })}
        </div>
    )

}


export default ItemListContainer;