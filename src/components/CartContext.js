import React, {useContext, useState, createContext} from 'react';

const CartContext = createContext();

export default function UseCart() {
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    function AddToCart(obj){
        setCart([...cart,obj])
        console.log(cart)
    }
    return (
        <CartContext.Provider value={{cart, AddToCart}}>
            {children}
        </CartContext.Provider>
    )
}