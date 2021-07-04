import React, {useContext, useState, createContext, useEffect} from 'react';

const CartContext = createContext();
const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export default function UseCart() {
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart, setCart] = useState(cartLocalStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    function AddToCart(obj){
        setCart([...cart,obj])
        console.log(cart)
    }
    
    function removeFromCart(obj){
        let removeItem = cart.filter(function(objeto){
            return objeto.id !== obj.id;
        })
        setCart(removeItem);
    }
    function removeAllCart(){
        setCart([]);
    }

    const totalCart = () => {
        let total = 0;
        cart.forEach((producto) => {
            total += producto.total;
        });
        return total;
    }


    return (
        <CartContext.Provider value={{cart, AddToCart,totalCart, removeFromCart, removeAllCart}}>
            {children}
        </CartContext.Provider>
    )
}