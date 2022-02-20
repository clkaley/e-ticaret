//redux için yapıldı
import React, {useState,useEffect} from 'react'
//import React, {useEffect} from 'react'
//import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux';
import { listProductDetails } from '../action/productAction';
import Loader from '../component/Loader';
import Message from '../component/Message'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import Rating from '../component/Rating'
import { useParams } from 'react-router-dom';
//import products from '../products'
import { useNavigate } from 'react-router';
 //shopping-cart
function ProductDisplay({match}) {
  //qty,setqty
 const [qty,setqty]=useState(1);

  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails);
  const {loading,error,product}=productDetails
  const { id } = useParams();
        useEffect(()=>{
          dispatch(listProductDetails(id))
        },[dispatch,match]);


  const navigate = useNavigate();
  const addToCardHandler = () => {
    //ikiside oluyor.
    //navigate(`/cart/${id}?qty=${qty}`)
    navigate(`/shopping-cart/${id}?qty=${qty}`)

    };

 //const match = useParams()
  //const product = products.find((p) => p._id === match.id);

  //redux için
 // const { id } = useParams();
  //const [product, setProducts]=useState({})

  /*useEffect(()=>{
    const fetchProducts= async () => {
       const { data } = await axios.get(`/api/products/${id}`)
      //  const {data}= await axios.get(`/api/products/ ${match.params.id}`)

        setProducts(data)
    }
    fetchProducts()
}, [match])*/

 
  return <div>
       
        <Col className='my-5 mx-auto'>
      
       </Col>
       {loading ? <Loader /> :error ? <Message variant="danger">{error}</Message> : (<Row className='mr-2 ms-auto justify-content-md-center '>
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

                  {product.stock >0 && (
                    <ListGroupItem>
                      <Row>
                          <Col> Qty:
                          </Col>
                          <Col>
                            <Form.Control as="select" value={qty} onChange={(e)=>setqty(e.target.value)}>
                             {
                              [...Array(product.stock).keys()].map((x) =>(
                                <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>
                              ))}
                              
                            </Form.Control>
                          </Col>
                      </Row>
                    </ListGroupItem>
                  )}

                  <ListGroupItem className='mx-auto'>
                    <Button
                    onClick={addToCardHandler}
                    className='btn-block btn-danger ' type='button'
                    disabled={product.stock===0}>
                      Add to Card
                    </Button>
                  </ListGroupItem>
                  
                </Card>
                <Row className='my-5 text-center'>
                  <Col>
                  
                  <Link className='btn btn-light btn-outline-danger btn-sm ms-auto "' to='/'>
                        Go Back
                  </Link>    
                            
                  </Col>
                </Row>
             
              </Col>
              
            
        </Row>
        
         )}


        
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