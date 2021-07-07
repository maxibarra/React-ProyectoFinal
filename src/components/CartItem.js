import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import UseCart  from "../CartContext"
import { Link } from "react-router-dom";



function CartItem({nombre, precio, cantidad,total,id}) {

    const {removeFromCart} = UseCart();
 console.log({nombre, precio, cantidad,total,id});
    return (
        <Row>
        <Col xs={2}>
          <Link to="/">
          <Button variant="danger" onClick={()=>{removeFromCart({id})}}>
            <p className="text-white m-0">eliminar</p>
          </Button>
          </Link>
        </Col>
      
        <Col xs={3}>
          <p>{nombre}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p >$ {precio}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p>{cantidad}</p>
        </Col>
        <Col xs={3} className="text-center">
          <p>$ {precio*cantidad}</p>
        </Col>
        
      </Row>
    );
}

export default CartItem;