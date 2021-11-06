import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import products from '../products'
import Product from '../component/Product'


const mainDisplay = () => {
    return (
        <Container>
           <h1>Latest Products</h1> 
              <Row>
                  {products.map(product =>(
                      <Col>
                         
                          <Product product={product} />                    
                      </Col>
                  ))}
              </Row>
        </Container>
    )
}

export default mainDisplay
