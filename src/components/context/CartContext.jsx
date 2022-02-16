import { useEffect } from "react";
import { createContext, useContext, useState} from "react";



export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        const getQuantity = () => {
            let quantity = 0;
            cart.forEach((product) => {
                quantity += product.quantity;
            });
            setCartQuantity(quantity);
        };
        getQuantity();
    }, [cart]);
    
    const addItem = (item, count) => {
        const newItem = {item, count};
        const productIn = cart.find(
            (product) => product.item.id === item.id
            );
            if (productIn) {          
                const newCart = cart.filter(
                    (product) => product.item.id !== item.id
                );
                productIn.count += count ;
                setCart([...newCart, productIn]);
    
            } else setCart((prevState) => [...prevState, newItem],
            )
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
    };

    const clear = () => {
        setCart ([]);
    };


    const totalPrice = () => { 
        
        return cart.reduce((acc, prod) => acc + prod.item.price * prod.count, 0);
    }
    console.log(totalPrice()) 




    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalPrice, cartQuantity}}>
            {children}
        </CartContext.Provider>
    );
    
};

export const useCartContext = () => useContext(CartContext);

