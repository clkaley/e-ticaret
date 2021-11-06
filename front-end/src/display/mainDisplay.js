import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'


const mainDisplay = () => {
    return (
        <>
           <h1>Latest Products</h1> 
                <Row>
                        {products.map(product => (
                            <Col sm={12}>
                                <h3>{product.name}</h3>
                            </Col>
                        ))}
                </Row>
        </>
    )
}

export default mainDisplay
