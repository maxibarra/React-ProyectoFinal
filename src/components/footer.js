import React from "react";
import { Col, Row} from "react-bootstrap";
import "../styles/footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col md={6} className="redes">
          <div>
            <img
              className="whatsapp"
              src="/assets/whatsapp-logo.png"
              alt="First slide"
            />
            <p>Whatsapp</p>
          </div>

          <div>
            <img
              className="instagram"
              src="/assets/instagram1.png"
              alt="second slide"
            />
            <p>Instagram</p>
          </div>
          <div>
            <img
              className="instagram"
              src="/assets/envios.jpg"
              alt="second slide"
            />
            <p>Envios a todo el pais</p>
          </div>
         
        </Col>

        <Col md={6} >
          <div className="informacion">
            <Link>
            <p> Politicas de cambios</p>
            </Link>
            <br></br>
            <p>Envios gratis en compras mayores a $ 10.000</p>
          <br></br>
          <p>Todos los metodos de pago</p>
          </div>
        </Col>
      </Row>
      
    </div>
  );
}

export default Footer;
