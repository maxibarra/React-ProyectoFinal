import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import UseCart  from "../CartContext"



function CartItem({title, price, count,total,id}) {

    const {removeFromCart} = UseCart();
 
    return (
        <Row>
        <Col xs={1}>
          <Button variant="danger" onClick={()=>{removeFromCart({id})}}>
            <p className="text-white m-0">eliminar</p>
          </Button>
        </Col>
        <Col xs={4}>
          <p>{title}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p >$ {price}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p>{count}</p>
        </Col>
        <Col xs={3} className="text-center">
          <p>$ {total}</p>
        </Col>
       
      </Row>
    );
}

export default CartItem;