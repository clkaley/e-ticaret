import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../component/Rating'
import { useParams } from 'react-router-dom';
//import products from '../products'

 
function ProductDisplay({match}) {
  //const match = useParams()
  //const product = products.find((p) => p._id === match.id);
  const { id } = useParams();
  const [product, setProducts]=useState({})

  useEffect(()=>{
    const fetchProducts= async () => {
       const { data } = await axios.get(`/api/products/${id}`)
      //  const {data}= await axios.get(`/api/products/ ${match.params.id}`)

        setProducts(data)
    }
    fetchProducts()
}, [])

 
  return <div>
       
       <Col className='my-5 mx-auto'>
     
       </Col>
        <Row className='mr-2 ms-auto justify-content-md-center '>
            <Col  md={5} >
              <Image  src={product.image} alt={product.name} fluid />
            </Col>
         
         <Col sm={1}>
         </Col>
            <Col md={4}  className=' mx-5'>
              <ListGroup variant="flush">
                  <ListGroupItem className='text-center'>
                    <h2>{product.name}</h2>
                  </ListGroupItem>
              </ListGroup>
              <ListGroupItem  >
                <Rating   value={product.rating} text={`${product.total_comments} comments`} />
              </ListGroupItem>
           

              <ListGroupItem>
                 Description: {product.description}
              </ListGroupItem>
              <ListGroupItem>
                 Brand: {product.brand}
              </ListGroupItem>
              <Card>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                      <Col>
                       Price: 
                      
                        <strong>   {product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>

                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                      <Col>
                       Stock:  
                        
                           { product.stock > 0 ? 'In Stock': 'OUT OF STOCK'}
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
             <Row className='my-5 text-center'>
               <Col>
               
               <Link className='btn btn-light btn-outline-danger btn-sm ms-auto "' to='/'>
          Go Back
        </Link>               </Col>
             </Row>
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
<Link className='btn btn-primary my-3 ms-auto"' to='/'>
          Go Back
        </Link>
 */