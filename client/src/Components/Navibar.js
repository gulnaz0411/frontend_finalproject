import React, { useState} from 'react';
import { Navbar, Nav, Button, Container, Modal, Form,ModalTitle,ModalBody, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link  {
      color: #adb1b8;
      &:hover {
        color:white
      }
    }
`

  export default function NaviBar() {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Bicycles for rent</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/reporttheft">Report of theft</Link></Nav.Link>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                
                
                
            </Nav>
          
        </Navbar.Collapse>
        </Container>

      </Navbar>
      </Styles>
      
    </>
)}