import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar,Nav, Container, NavDropdown, } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { logout } from '../action/userAction'


const Header = ({color}) => {

    const dispatch=useDispatch();

    const userLogin=useSelector(state =>state.userLogin)
    const {userInfo}=userLogin


  /* const logoutHandler=()=>{
        console.log("logout")
    }
    */
  

    const logoutHandler=()=>{
        dispatch(logout())
        console.log("logout")
    }

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




    {userInfo ?  (

        /*
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        */ 
        <NavDropdown className="my-2" title={userInfo.name} id='username'>
             <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
             
             <NavDropdown.Item onClick={logoutHandler}>
                Log Out
                </NavDropdown.Item>

        </NavDropdown>
    ) :
     <Nav.Link href="/login"><i className="fas fa-child fa-2x"></i>Sign In</Nav.Link> }


                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        
    )
}


Header.defaultProps={
    color:'red'
}


export default Header




/*
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

*/
/*


                        
                        {userInfo ?( 
                         <NavDropdown className='my-2' title={userInfo.name} id='username'>
                             <div>
                                <Nav.Link href='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </Nav.Link>
                                
                                    <Nav.Link>
                                    <NavDropdown.Item onClick={logoutHandler} >  Log Out</NavDropdown.Item>
                                    </Nav.Link>
                            </div>
                         </NavDropdown>)

                        : (
*/