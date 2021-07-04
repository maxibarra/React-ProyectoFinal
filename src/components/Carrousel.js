import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel() {
   
  
    return (
        <Carousel >
        <Carousel.Item >
          <img style={{height:'50rem'}}
            className="d-block w-100"
            src="/assets/Ejemplo.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'50rem'}}
            className="d-block w-100"
            src="/assets/ejemplo2.png"
            alt="Second slide"
          />
      
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'50rem'}}
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