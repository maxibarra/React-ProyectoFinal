import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const { id } = useParams();
  

  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    obtenerDetalle();
  },[]);

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
            style={{marginTop:"5rem",width: "10rem", height: "10rem" }}
            src={detalle.image}
          />
          <Card.Body>
            <Card.Title>{detalle.title}</Card.Title>
            <Card.Text>{detalle.category}</Card.Text>
            <Card.Text>{detalle.description}</Card.Text>
            <Card.Text>$ {detalle.price}</Card.Text>
          
            <Card.Body>
            <ItemCount producto={detalle} />
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
