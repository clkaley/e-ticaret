import React from 'react'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CheckOut({s1,s2,s3,s4}) {
  return (
      <div>
    <Nav className='justify-content-center mb-4 my-3 text-danger '>
        <Nav.Item >
            {s1 ? (
                <Link style={{
                    margin:'auto',
                    textDecoration: 'none'
                    }} to='/login'>
                    <Nav.Item  >Sign In
                    </Nav.Item>   
                </Link>
            ): <Nav.Link disabled>
                    Sign In
                </Nav.Link>}
        </Nav.Item>


        <Nav.Item>
            {s2 ? (
                <Link style={{
                    margin:'auto',
                    textDecoration: 'none'
                    }} to='/shipping'>
                 <Nav.Item>Shipping
                </Nav.Item>   
                </Link>
            ): <Nav.Link disabled>
                   Shipping
                </Nav.Link>}
        </Nav.Item>


        <Nav.Item>
            {s3 ? (
                <Link style={{
                    margin:'auto',
                    textDecoration: 'none'
                    }} to='/payment'>
                 <Nav.Item>Payment
                 </Nav.Item>   
                </Link>
            ): <Nav.Link disabled>
                   Payment
                </Nav.Link>}
        </Nav.Item>

        <Nav.Item>
            {s4 ? (
                <Link style={{
                    margin:'auto',
                    textDecoration: 'none'
                    }} to='/placeorder'>
                 <Nav.Item>Place Order
                 </Nav.Item>   
                </Link>
            ): <Nav.Link disabled>
                   Place Order
                </Nav.Link>}
        </Nav.Item>


    </Nav>
    </div>
  )
}

export default CheckOut