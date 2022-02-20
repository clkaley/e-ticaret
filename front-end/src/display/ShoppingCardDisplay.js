import React,{ useEffect } from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector }from   'react-redux';
import {Row,Col,ListGroup,Image,Form,Button,Card, ListGroupItem} from 'react-bootstrap'
import { addToCard,removeFromCard } from '../action/cardAction'
import Message from '../component/Message';
//import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useLocation, useParams ,useHistory} from 'react-router-dom'



const ShoppingCardDisplay = (location) => {

  const { id: productId } = useParams()

  //const qty = new URLSearchParams(useLocation().search).get('qty') 
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  

  const dispatch= useDispatch();

  const card=useSelector(state=>state.card)
  const {cardItems}=card;
  console.log(cardItems);

  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])

  const removeFromCardHandler=(id) =>{
    console.log('remove');
    dispatch(removeFromCard(id));
  }

  
const navigate=useNavigate();
  //check edilmiyor
    const checkOutHandler = () => {
     navigate('/login')
      console.log("check")
 }



 /* const { id } = useParams();
  const productId=useParams();*/

/*
  const qty=location.search ? Number(location.search.split('=')[1]) : 1
*/

  //const productId = match.params.id
  /*const qty = location.search ? Number(location.search.split('=')[1]) : 1;


  const dispatch= useDispatch();
  
  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])
*/

  //console.log(qty);

 
 
  /* const { id } = useParams();
  const productId=useParams()


  const qty=location.search ? Number(location.search.split('=')[1]):1 */
  //tanımsız dönüyor anlamadım
  //?qty=1

  /*const dispatch= useDispatch()
  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])*/

  return (
    
      <Row className='my-5'>
        <Col md={9}>
        {/* <h1 >Shopping Card</h1> */}
        {cardItems.length ===0 ? <Message className="">Your Shopping Card is empty  <Link className='btn btn-info  btn-sm ms-auto  "' to='/'>
                        Go Back
                  </Link>    </Message> : (
          <ListGroup variant='flush'>
            {cardItems.map(item=>(
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                  </Col>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    {item.price}
                  </Col>
                  <Col md={2}>
                  <Form.Control as="select" value={item.qty} onChange={(e) => dispatch(addToCard(item.product, Number(e.target.value)))}>
                             {
                              [...Array(item.stock).keys()].map((x) =>(
                                <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>
                              ))}
                              
                            </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant='light' onClick={()=> removeFromCardHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>

              </ListGroupItem>
            ))}
          </ListGroup>
          
        )}
       </Col>
          <Col md={3}>
              <Card>
                <ListGroup variant='flush' className='text-center'>
                  <ListGroupItem>
                    <h2>Total {cardItems.reduce((acc, item) => acc + item.qty, 0)} Items</h2>
                    $ {cardItems.reduce((acc, item)=>(acc+item.qty * item.price), 0).toFixed(2)} 
                  </ListGroupItem>
                  <ListGroupItem className='text-center'>
                    <Button 
                    type='button'
                     className='btn btn-block '
                     disabled={cardItems.length===0 } onClick={checkOutHandler}>
                       Keep Checking
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
          </Col>
          
      </Row>
   
  )
}

export default ShoppingCardDisplay