import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const datos = await fetch(
        `https://fakestoreapi.com/products?limit=9&offset10`
      );
      const res = await datos.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
       <h1>Lista de Productos</h1>
      {data.map((item) => (
        <Card
          key={item.id}
          style={{
            width: "35rem",
            display: "flex",
            flexDirection: "row",
            margin: "15px",
          }}
        >
          <Card.Img
            style={{marginTop:"4rem", width: "10rem", height: "10rem" }}
            src={item.image}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.category}</Card.Text>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>$ {item.price}</Card.Text>
            <Card.Body style={{ background: "rgb(238,238,240)" }}>
              <Link to={`/ItemDetail/${item.id}`}>
                <Card.Link style={{ paddingLeft: "9rem" }}>
                  Ver Detalle
                </Card.Link>
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemDetailConteiner;
