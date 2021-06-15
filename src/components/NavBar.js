import React from 'react';
import {Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';




function NavBar(){
    return (

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"> Home </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-1"> Productos </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-2" >  About </Nav.Link>
        </Nav.Item>  
        <Nav.Item>
          <Nav.Link  eventKey="link-3" > Contact  </Nav.Link>
        </Nav.Item>  
         <Nav.Item>
         <CartWidget/>
         </Nav.Item>
          
    
       </Nav>
    );
 
}

export default NavBar;