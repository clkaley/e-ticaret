import React from 'react'
import { Navbar,Nav, Container, } from 'react-bootstrap'

const header = () => {
    return (
        <header>
            <Navbar  bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Leica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home"><i className='fas fa-shopping-cart fa-2x'></i>Shopping Cart</Nav.Link>
                        <Nav.Link href="/link"><i className="fas fa-child fa-2x"></i>Sign In</Nav.Link>
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default header
