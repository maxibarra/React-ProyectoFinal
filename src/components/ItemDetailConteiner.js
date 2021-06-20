import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const ItemDetailConteiner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const datos = await fetch(`https://fakestoreapi.com/products?limit=4&offset10`);
      const res = await datos.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
      <div>
        {data.map((item) => (
           <Card 
           key={item.id} 

           style={{ 
             width:'16rem',
             display:'inline-block',
             margin:'15px'
             }}>
         <Card.Body> 
             <div>
             <img
             src={item.image} 
             alt=""  
             style={{width:'150px',margin:"14px"}}
             />
             </div>
           <Card.Title >{item.title}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
             {item.description}
             </Card.Subtitle>
           <Card.Text>  $ {item.price}</Card.Text>
           <ItemCount/>
           <Card.Link href="#">Comprar</Card.Link>
           <Card.Link href="#">Ver articulo</Card.Link>
         </Card.Body>
       </Card>
        ))}
      </div>
    
  );
};

export default ItemDetailConteiner;
