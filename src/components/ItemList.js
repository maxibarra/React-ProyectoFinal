import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import productos from '../productos.json';



function ItemList(){
return(
    <div>
        {
            productos.map((Item,index)=>{return <Card style={{ width:'18rem',display:'inline-block',margin:'5px',border:'5px double red'}}>
            <Card.Body>   
              <Card.Title id={index}>{Item.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{Item.descripcion}</Card.Subtitle>
              <Card.Text>
                $ {Item.precio} 
              </Card.Text>
              <ItemCount/>
              <Card.Link href="#">Agregar al carrito</Card.Link>
 
            </Card.Body>
          </Card>})
        }
    </div>
)

}

export default ItemList;