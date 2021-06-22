import React, { useState } from "react";

const Min = 1;
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
    <div
      style={{
        paddingLeft: "10rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <button
        style={{
          fontSize: "30px",
          display: "inline",
          color: "white",
          border: "red",
          background: "red",
        }}
        onClick={disminuirCount}
      >
        {" "}
        -{" "}
      </button>
      <div style={{ margin: "10px" }}>{count}</div>
      <button
        style={{
          fontSize: "30px",
          display: "inline",
          color: "white",
          border: "none",
          background: "green",
        }}
        onClick={aumentarCount}
      >
        {" "}
        +{" "}
      </button>{" "}
      <br></br>
    </div>
  );
};

export default ItemCount;
