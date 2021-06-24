import React, { useState } from "react";




const Min = 0;
const Max = 10;
const ItemCount = () => {
  const [count, setCount] = useState(Min);

  function aumentarCount() {
    let valor = count + 1;
    if (valor <= Max) {
      setCount(count + 1);
    }
  }

  function disminuirCount() {
    let valor = count - 1;
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
        <button 
          style={{
            background: "rgb(238,238,240)",
            padding: "15px 70px 15px 70px",
            marginLeft: "5rem",
            border: "none",
          }} 
        >
          {" "}
          agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
