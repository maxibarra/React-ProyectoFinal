import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [detalle, setDetalle] = useState([null]);

  useEffect(() => {
    obtenerDetalle();
  }, []);

  const obtenerDetalle = async () => {
    try {
      const datos = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await datos.json();
      setDetalle(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{ background: "rgb(247,238,224)", padding: "5rem 20rem 12rem" }}
    >
      {detalle !== null ? (
        <Card
          style={{
            width: "40rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            margin: "10px",
          }}
        >
          <Card.Img
            style={{ width: "10rem", height: "10rem" }}
            src={detalle.image}
          />
          <Card.Body>
            <Card.Title>{detalle.title}</Card.Title>
            <Card.Text>{detalle.category}</Card.Text>
            <Card.Text>{detalle.description}</Card.Text>
            <Card.Text>$ {detalle.price}</Card.Text>
            <ItemCount />
            <Card.Body style={{ background: "rgb(238,238,240)" }}>
              <Link to={`/cart`}>
                <Card.Link style={{ paddingLeft: "8rem" }}>
                  agregar al carrito
                </Card.Link>
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      ) : (
        <h3>Cargando</h3>
      )}
    </div>
  );
};

export default ItemDetail;
