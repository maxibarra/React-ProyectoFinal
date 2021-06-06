import React from 'react';
import image from '../assets/shop-cart.png'
import './CartWidget.css';


function CartWidget(props) {
        return (
            <div className="shop-cart">
                <a href="#"><img src={image} alt=""/></a> 
            </div>
        )
}


export default CartWidget;
