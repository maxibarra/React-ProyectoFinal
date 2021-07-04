import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CartConteiner from '../components/CartConteiner';
import Modal from 'react-bootstrap/Modal'

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
            </Row>
          </Container>
          <CartConteiner />
        </>
      );
    
}

export default Cart
