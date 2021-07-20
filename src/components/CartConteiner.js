import React, {useEffect, useState} from "react";
import CartItem from "./CartItem";
import UseCart from "../CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




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
            <Col xs={2} className="font-weight-bold">
              <p>Acciones</p>
            </Col>

            <Col xs={3} className="font-weight-bold">
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
          
          {cart.map((producto,index) => {
          
            return (
              <CartItem key={index}            
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                cantidad={producto.cantidad}
                total={producto.precio*producto.cantidad} 
                  
              />
            );
          })}
          
          <hr style={{border:"1px solid"}}></hr>

          <Row className="justify-content-end align-items-center">
            <Col>
            <Link to="/products">
              <Button
                onClick={() => {
                  removeAllCart();
                }}
              >
                Borrar Todo
              </Button>
              </Link>
            </Col>
            <Col xs={3} className="text-right">
              <p className="cursive font-weight-bold h4 text-primary">Total Compra</p>
            </Col>
            <Col xs={3} className="text-center">
              <p>${total}</p>
            </Col>
          </Row>
        </Container>
      );
    }
}

export default CartConteiner;