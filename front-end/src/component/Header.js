import React from 'react'

import { Navbar,Nav, Container, } from 'react-bootstrap'

const header = ({color}) => {
    return (
        <header>
            
            <Navbar  bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                <Nav.Link href="/">
                            <Navbar.Brand  style={{color}}>PRΞTIUM </Navbar.Brand>
                            </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <Nav.Link href="/shopping-cart"><i className='fas fa-shopping-cart fa-2x'></i>Shopping Card</Nav.Link>
                        
                        
                        <Nav.Link href="/login"><i className="fas fa-child fa-2x"></i>Sign In</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


header.defaultProps={
    color:'red'
}


export default header
