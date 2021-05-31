import React from 'react';
import {Nav} from 'react-bootstrap';


export default function NavBar() {
    return (
      
      <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"> Home </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="link-1"> About </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="link-2" >  Contact </Nav.Link>
  </Nav.Item>
</Nav>
    )
}