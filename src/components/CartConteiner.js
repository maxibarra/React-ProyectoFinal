import React, {useEffect, useState} from "react";
import CartItem from "./CartItem";
import UseCart from "../CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";




function CartConteiner() {
    const [total, setTotal] = useState(0);
    const { cart, totalCart, removeAllCart } = UseCart();
  
    const ObtenerTotal = () => {
      setTotal(totalCart());
    };
 
    useEffect(() => {
      ObtenerTotal();
    }, [cart]);
  
    if (cart.length > 0) {
      return (
        <Container className="mt-5">
          <Row>
            <Col xs={5} className="font-weight-bold">
              <p>Producto</p>
            </Col>
            <Col xs={2} className="font-weight-bold text-center">
              <p>Precio</p>
            </Col>
            <Col xs={2} className="font-weight-bold text-center">
              <p>Cantidad</p>
            </Col>
            <Col xs={3} className="font-weight-bold text-center">
              <p>Total</p>
            </Col>
          </Row>
          
          {cart.map((item,index) => {
            return (
              <CartItem
                key={index}
                id={item.title}
                producto={item.title}
                precio={item.price}
                cantidad={item.count}
                total={item.total}
              />
            );
          })}
          <Row className="justify-content-end align-items-center">
            <Col>
              <Button
                onClick={() => {
                  removeAllCart();
                }}
              >
                Borrar Carrito
              </Button>
            </Col>
            <Col xs={3} className="text-right">
              <p className="cursive font-weight-bold h4 text-primary">Total Compra</p>
            </Col>
            <Col xs={3} className="text-center">
              <p>$ {total}</p>
            </Col>
          </Row>
          {console.log(cart)}
        </Container>
      );
    }
}

export default CartConteiner;