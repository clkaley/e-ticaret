import React ,{useState,useEffect}from 'react'
import {Row,Col,ListGroup, Image, Card, ListGroupItem,} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message'
import { useNavigate } from 'react-router';
//import CheckOut from '../component/CheckOut.js'
import Loader from '../component/Loader'
import{Link} from 'react-router-dom'
import { getOrderDetails } from '../action/orderAction';
import {  useParams } from 'react-router-dom'


const OrderDisplay = () => {

    //const { id:orderId } = useParams()

    const { id:orderId  } = useParams()


    const orderDetails=useSelector(state=>state.orderDetails);

    const {order,loading,error} =orderDetails

    if(!loading){
    const addDec=(num)=>{
        return (Math.round(num*100)/100).toFixed(2)
    }
    
    //ürün fiyatını hesaplama
    order.itemsPrice=addDec(order.orderItems.reduce((acc,item)=> acc+item.price*item.qty,0))
    console.log(order.itemsPrice);
}



    //çalışıyor
   /*const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getOrderDetails(orderId))
    },[])*/

    const dispatch=useDispatch()
    useEffect(() => {
        if(!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
    }, [order, orderId]) 


  return loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message> : 
            <>
                <h3 className='text-muted my-2 '>Order {order._id}</h3>
                <Row >
            <Col md={8}>
                <ListGroup variant='flush'>
                        <ListGroupItem className='my-3'>
                            <h3 style={{color:'red'}}>Shipping</h3>
                            <p>Name: {order.user.name }</p>
                            <p>Email:
                            <a  href={ ` mailto:${ order.user.email}`}> { order.user.email}</a>
                            </p>
                            <p>
                                <strong>
                                    Address:
                                </strong> 
                                {order.shippingAddress.address}, {' '}
                                {order.shippingAddress.city}, {' '} 
                                {order.shippingAddress.postCode}, {' '}
                                {order.shippingAddress.country}
                            </p>
                    {order.isDelivered}
                    {order.isPaid ? <Message variant='success' >Delivered {order.deliveredAt}</Message> :<Message variant='danger'>Not Delivered</Message> }

                        </ListGroupItem>
                <ListGroupItem className='my-3'>
                    <h3 style={{color:'red'}}>Payment Method</h3>
                    <strong>Method: </strong>
                    {order.paymentMethod}
                    {order.isPaid ? <Message variant='success' >Paid {order.paidAt}</Message> :<Message variant='danger'>Not Paid</Message> }

                </ListGroupItem>

                <ListGroupItem className='my-3'>
                    <h3  style={{color:'red'}}>Order Items</h3>

                    {order.orderItems.length ===0 ? <Message>
                        Order is Empty </Message> : (
                        <ListGroup 
                        variant="flush">
                            {order.orderItems.map((item,i)=>(<ListGroupItem key={i}>
                                 <Row>
                                     <Col md={1}>
                                         <Image 
                                         src={item.image} 
                                         alt={item.name}
                                         fluid rounded></Image>
                                     </Col>
                                     <Col>
                                        <Link to={`/product/${item.product}`}/>
                                        {item.name}
                                     </Col>
                                     <Col md={4}>
                                         {item.qty} x {item.price}= ${item.qty *item.price} 
                                     </Col>
                                 </Row>
                            </ListGroupItem>))}    
                        </ListGroup>
                    )}
                </ListGroupItem>

                </ListGroup>   
            </Col>
            <Col md={4} className=''>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h4 style={{color:'red'}}>Order Summary</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Items:
                                </Col>
                                <Col>
                                ${order.itemsPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Shipping:
                                </Col>
                                <Col>
                                ${order.shippingPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Tax:
                                </Col>
                                <Col>
                                ${order.taxPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Total:
                                </Col>
                                <Col>
                                ${order.totalPrice}
                                </Col>
                            </Row>                      
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
</>

 

  
}

export default OrderDisplay