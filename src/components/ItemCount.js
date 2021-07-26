import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseCart from "../CartContext";
import "../styles/itemCount.css";

let Min = 0;
let Max = 10;

const ItemCount = ({ producto }) => {
  const [count, setCount] = useState(Min);

  const { AddToCart } = UseCart();

  let ArrayProducto = {
    nombre: producto.title,
    precio: producto.price,
    cantidad: count,
    id: producto.id,
    total: count * producto.price,
  };

  function aumentarCount() {
    let valor = count + 1;
    if (count < Max) {
      setCount(count + 1);
    }
    if (valor <= Max) {
      setCount(count + 1);
    }
  }

  function disminuirCount() {
    let valor = count - 1;

    if (count > Min) {
      setCount(count - 1);
    }

    if (valor >= Min) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div >
        <div className="countContainer">
          <div className="disminuir"  onClick={disminuirCount}>
             -
          </div>
          
          <div className="aumentar"
            onClick={aumentarCount}>          
            +
          </div>
        </div>
      </div>
      <div style={{ paddingLeft:"60px" }}>
        <p>Cantidad: {count}</p>
      </div>

      <div>
        {count !== 0 ? (
          <Link to="/Cart">
            <Card.Link>
              <button className="agregarAlCarrito"
                onClick={() => {
                  AddToCart(ArrayProducto);
                }}>  
                agregar al carrito
              </button>
            </Card.Link>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ItemCount;
