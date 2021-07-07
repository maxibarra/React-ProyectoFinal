import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseCart from "../CartContext";



let Min = 0;
let Max = 10;

const ItemCount = ({producto}) => {
  const [count, setCount] = useState(Min);

  const { AddToCart } = UseCart();

  let ArrayProducto = {
    "nombre": producto.title,
   "precio": producto.price,
    "cantidad": count,
    "id":producto.id,
    "total":count*producto.price
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
      <div
        style={{
          paddingLeft: "10rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            display: "inline",
            color: "white",
            padding: "5px",
            border: "red",
            background: "red",
            cursor: "pointer",
          }}
          onClick={disminuirCount}
        >
          {" "}
          -{" "}
        </div>
        <div style={{ margin: "10px" }}>{count}</div>
        <div
          style={{
            fontSize: "30px",
            display: "inline",
            color: "white",
            padding: "5px",
            border: "none",
            background: "green",
            cursor: "pointer",
          }}
          onClick={aumentarCount}
        >
          {" "}
          +{" "}
        </div>{" "}
      </div>
      <div>
        {count != 0 ? (
          <Link to="/Cart">
            <Card.Link>
              <button
                onClick={() => {
                  AddToCart(ArrayProducto);
                }}
                style={{
                  background: "rgb(238,238,240)",
                  padding: "5px 10px 5px 70px",
                  marginLeft: "5rem",
                  border: "none",
                }}
              >
                {" "}
                agregar al carrito{" "}
              </button>
            </Card.Link>
          </Link>
        ) : null }
      </div>
    </div>
  );
};

export default ItemCount;
