import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../component/Rating'
import products from '../products'
 
function ProductDisplay() {
  const match = useParams()
  const product = products.find((p) => p._id === match.id);
 
  return <div>
       
        <Row className='pt-5'>
          </Row>
        <Row className='mr-2'>
          
            <Col  md={5} >
              <Image  src={product.image} alt={product.name} fluid />
            </Col>
         
         <Col sm={1}></Col>
            <Col md={4}  className=' mx-5'>
              <ListGroup variant="flush">
                  <ListGroupItem>
                    <h2>{product.name}</h2>
                  </ListGroupItem>
              </ListGroup>
              <ListGroupItem>
                <Rating  value={product.rating} text={`${product.total_comments} comments`} />
              </ListGroupItem>
             

              <ListGroupItem>
                 Description:{product.description}
              </ListGroupItem>
              <Card>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                      <Col>
                       Price: 
                        </Col>
                        <Col>
                        <strong>{product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>

                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                      <Col>
                       Stock: 
                        </Col>
                        <Col>
                        {product.stock > 0 ? 'In Stock': 'OUT OF STOCK'}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                  <ListGroupItem className='mx-auto'>
                    <Button className='btn-block btn-danger ' type='button' disabled={product.stock===0}>
                      Add To Shopping Cart
                    </Button>
                  </ListGroupItem>

                </Card>
              </Col>
              <Col md={3}>
               
             
            </Col>
        </Row>
    </div>
}
 
export default ProductDisplay

/*<ListGroupItem>
                 {product.price}
              </ListGroupItem>
*/


/**
<Link className='btn btn-primary my-3 ms-auto"' to='./'>
          Go Back
        </Link>
 */