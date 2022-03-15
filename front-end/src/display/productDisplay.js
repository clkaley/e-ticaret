//redux için yapıldı
import React, {useState,useEffect} from 'react'
//import React, {useEffect} from 'react'
//import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux';
import { listProductDetails,createProductReview } from '../action/productAction';
import Loader from '../component/Loader';
import Message from '../component/Message'
import {PRODUCT_CREATE_REVIEW_RESET} from '../constant/productConstant'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import Rating from '../component/Rating'
import { useParams } from 'react-router-dom';
//import products from '../products'
import { useNavigate } from 'react-router';
 //shopping-cart
function ProductDisplay({match}) {

  //qty,setqty
 const [qty,setqty]=useState(1);
 const [rating,setRating]=useState(0);
 const [comment,setComment]=useState('');


  const dispatch=useDispatch()

  const productDetails=useSelector(state=>state.productDetails);
  const {loading,error,product}=productDetails

  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin

  const productReviewCreate=useSelector(state=>state.productReviewCreate);
  const {
          success:successProductReview,
          error:errorProductReview
        }=productReviewCreate

  

  const { id } = useParams();

  useEffect(()=>{

    if(successProductReview){
      alert('Review Submitted')
      setRating(0)
      setComment('')
      dispatch({type:PRODUCT_CREATE_REVIEW_RESET})
    }
        dispatch(listProductDetails(id))
        },[dispatch,match,successProductReview]);


  const navigate = useNavigate();
  const addToCardHandler = () => {
    //ikiside oluyor.
    //navigate(`/cart/${id}?qty=${qty}`)
    navigate(`/shopping-cart/${id}?qty=${qty}`)

    };



    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(createProductReview(id,{
        rating,comment
      }))
    }

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
       {loading ? <Loader /> :error ? <Message variant="danger">{error}</Message> : (
       <>
       <Row className='mr-2 ms-auto justify-content-md-center '>
            <Col  md={5} >
              <Image  src={product.image} alt={product.name} fluid />
            </Col>
         
         <Col sm={1}>
         </Col>
            <Col md={4}  className=' mx-5 py-5'>
              <ListGroup variant="flush">
                  <ListGroupItem className='text-center'>
                    <h2>{product.name}</h2>
                  </ListGroupItem>
              </ListGroup>

              <ListGroupItem  >
                <Rating   value={product.rating} text={`${product.numReviews} comments`} />
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
        <div className='align-items-center'>
          <Row className='text-center
          '>
            <Col md={6}>
            
            </Col>
          <Col md={6} className='my-4'>
            <h4>Reviews</h4>
            {product.reviews.length === 0 && <Message>No Reviews</Message>}
            <ListGroup variant='flush'>
              {product.reviews.map(review=>(
                <ListGroupItem key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating}/>
                  <p>{review.createdAt.substring(0,10)}</p>
                  <p>{review.comment}</p>
                </ListGroupItem>
              ))}
              <ListGroupItem>
                <p style={{fontWeight:'bold'}}>Write a Photographer Review</p>
                {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                {userInfo ? (
                  <Form onSubmit={submitHandler}>
                    <FormGroup controlId='rating'>
                      <FormLabel className='my-2'>Rating</FormLabel>
                      <FormControl 
                      as='select' 
                      value={rating}
                      onChange={(e)=>setRating(e.target.value)}
                       >
                      <option value=''>Choose</option>
                      <option value='1'>1-Poor</option>
                      <option value='2'>2-Fair</option>
                      <option value='3'>3-Good</option>
                      <option value='4'>4-Very Good</option>
                      <option value='5'>5-Excellent</option>

                       </FormControl>
                    </FormGroup>

                    <FormGroup  controlId='comment'>
                      <FormLabel className='my-2'>
                        Comment
                      </FormLabel>
                      <FormControl 
                        as='textarea'
                        row='3'
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)} >
                        
                      </FormControl>
                    </FormGroup>


                    <Button 
                      type="submit"
                      variant='primary'
                      className='btn btn-light btn-outline-danger btn-sm ms-auto my-3'>Submit
                    </Button>
                  </Form>
                ) : <Message>Please <Link to='/login'>Sıgn In</Link> to write a review {''}</Message>}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        </div>
        </>
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