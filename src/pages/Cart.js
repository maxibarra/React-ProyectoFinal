import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import CartConteiner from "../components/CartConteiner";
import { Link } from "react-router-dom";
import UseCart from "../CartContext";

function Cart() {
  const { cart } = UseCart();

  return (
    <>
      <Container fluid className="bg-cart">
        <Row className="align-items-center h-100">
          <Col xs lg={7} md={6} className="ml-auto">
            <div className="container-main-all-texts">
              <h1 className="font-weight-bold cursive text-primary">Carrito</h1>
            </div>
          </Col>
         
          <Col xs lg={8} md={6} className="ml-auto">
            <div className="container-main-all-texts">
              {cart.length !== 0 ? (
                <CartConteiner />
              ) : (
                <p className="font-weight-bold cursive">
                  Su carrito se encuentra vacio, para comprar presione
                  <Link to="./products">AQUI</Link>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
