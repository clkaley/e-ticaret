import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import products from '../products'
import Product from '../component/Product'


const mainDisplay = () => {
    return (
        <Container>
           
              <Row>
                  {products.map(product =>(
                      <Col sm={12} md={6} lg={4} xl={3}>
                         
                          <Product product={product} />                    
                      </Col>
                  ))}
              </Row>
        </Container>
    )
}

export default mainDisplay
