import { createContext, useContext, useState} from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const addItem = (item, count) => {
        const newItem = {item, count};
        console.log("Se agrego al carrrito:", newItem);
        setCart((prevState) => [...prevState, newItem]);
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id === id));
    };

    const clear = () => {
        setCart ([]);
    };

    //const isInCart: (id) => true|false

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
    
};

export const useCartContext = () => useContext(CartContext);

//const [error, setError] = useState(null);
///const [isLoading, setIsLoading] = useState(false);

//useEffect (() => {
    
    //setIsLoading(true);
   // fetch("http://localhost:3001/productos") 
    //    .then((response) => response.json()) 
    //    .then((json) => setCarrito())
    //    .catch((err) => setError(err))
    ///    .finally(()=> isLoading(false));
//},[]);