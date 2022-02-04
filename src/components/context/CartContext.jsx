import { createContext, useContext, useState} from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        setCart((prevState) => [...prevState, newItem])
    }

    return(
        <CartContext.Provider value={{cart, addItem}}>
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