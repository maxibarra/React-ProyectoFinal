import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartConteiner from "../components/CartConteiner";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Container fluid className="bg-cart">
        <Row className="align-items-center h-100">
          <Col xs lg={4} md={6} className="ml-auto">
            <div className="container-main-all-texts">
              <h1 className="font-weight-bold cursive text-primary">
                Su Carrito
              </h1>
            </div>
            </Col>
            <Col xs lg={2} md={6} className="ml-auto">
              <Link to="./products">
                <Button>Seguir Comprando</Button>
              </Link>
            </Col>   
        </Row>
        <Row>
        <Col xs lg={12} md={6} className="ml-auto">
            <div className="container-main-all-texts">
              <CartConteiner />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
