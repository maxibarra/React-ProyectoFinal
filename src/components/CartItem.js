import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import UseCart  from "../CartContext"


function CartItem({producto, precio, cantidad, total , id}) {

    const {removeFromCart} = UseCart();

    return (
        <Row>
        <Col xs={1}>
          <Button variant="danger" onClick={()=>{removeFromCart({id})}}>
            <p className="text-white m-0">deshacer</p>
          </Button>
        </Col>
        <Col xs={4}>
          <p>{producto}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p >$ {precio}</p>
        </Col>
        <Col xs={2} className="text-center">
          <p>{cantidad}</p>
        </Col>
        <Col xs={3} className="text-center">
          <p>$ {total}</p>
        </Col>
      </Row>
    );
}

export default CartItem;