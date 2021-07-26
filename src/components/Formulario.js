import React from "react";
import { Row, Button, Col, Container, Form } from "react-bootstrap";
import '../styles/contacto.css';


function Formulario(){
  return (
        
      <Container fluid="md" >

          <h2> Contactenos </h2>

          <p>Responderemos a la brevedad</p>
        <Form>
          <Row>
            <Col xs={5}>
              <Form.Group  className="mt-4" controlId="formGroupName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control   className="form-control shadow"
                  type="text"
                  required
                  placeholder="ingrese el nombre"
                />
              </Form.Group>
            </Col>
            <Col xs={5}>
              <Form.Group  className="mt-4" controlId="formGroupApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control  className="form-control shadow"
                  type="text"
                  required
                  placeholder="ingrese el Apellido"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control  className="form-control shadow" type="email" required placeholder="Correo" />
              </Form.Group>
            </Col>
            <Col xs={10}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label> Mensaje </Form.Label>
                <Form.Control 
                className="form-control shadow"
                  as="textarea"
                  cols={6}
                  rows={6}
                  placeholder="Mensaje"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            enviar
          </Button>
        </Form>
      </Container>
  
  );
}

export default Formulario;
