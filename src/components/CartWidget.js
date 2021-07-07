import React from "react";
import "../styles/CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="shop-cart">
      <Link to="/Cart">
        <img src="/assets/shop-cart.png" alt="shop-Cart" />
      </Link>
    </div>
  );
}

export default CartWidget;
