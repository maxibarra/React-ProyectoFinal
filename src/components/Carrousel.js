import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/carrousel.css'

function ControlledCarousel() {
   
  
    return (
        <Carousel >
        <Carousel.Item >
          <img 
            className="d-block w-100"
            src="/assets/Ejemplo.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="/assets/ejemplo2.png"
            alt="Second slide"
          />
      
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/ejemplo3.png"
            alt="Third slide"
          />
      
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel;