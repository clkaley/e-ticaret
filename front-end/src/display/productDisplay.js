import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../component/Rating'
import products from '../products'
 
function ProductDisplay() {
  const match = useParams()
  const product = products.find((p) => p._id === match.id);
 
  return <div>
        <Link className='btn btn-light my-3' to=''>
          Go Back
        </Link>
        <Row>
          
            <Col md={6} className="product-detail" >
              <Image  src={product.image} alt={product.name} />
            </Col>
         
            <Col md={3} >
              <ListGroup variant="flush">
                  <ListGroupItem>
                    <h2>{product.name}</h2>
                  </ListGroupItem>
              </ListGroup>
              <ListGroupItem>
                <Rating value={product.rating} text={`${product.total_comments} comments`} />
              </ListGroupItem>
            </Col>
        </Row>
    </div>
}
 
export default ProductDisplay