import React ,{useState,useEffect}from 'react'
import {Button,Row,Col,ListGroup, Image, Card, ListGroupItem,} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message'
import { useNavigate } from 'react-router';
import CheckOut from '../component/CheckOut.js'
import{Link} from 'react-router-dom'
import { createOrder } from '../action/orderAction';


const PlaceOrderDisplay = () => {
    const dispatch=useDispatch()
    //cart
    const card=useSelector(state=>state.card)

    //addDecimal ile
    const addDec=(num)=>{
        return (Math.round(num*100)/100).toFixed(2)
    }
    
    //ürün fiyatını hesaplama
    card.itemsPrice=addDec(card.cardItems.reduce((acc,item)=> acc+item.price*item.qty,0))
    console.log(card.itemsPrice);

    //kargo ücreti taşıma teslimat
    card.shippingPrice=addDec(card.itemsPrice> 100 ? 0: 100)


    //taksit üzerinden fiyatlandırma
    card.taxPrice=addDec(Number((0.20*card.itemsPrice).toFixed(3)))

    card.totalPrice=(Number(card.itemsPrice)+Number(card.shippingPrice)+Number(card.taxPrice)).toFixed(2);


    const orderCreate=useSelector(state=>state.orderCreate);
    const {order,success,error} =orderCreate

    //sıkıntılı kısım
    const navigate=useNavigate();
    useEffect(()=>{
        if(success){
            navigate(`/order/order._id`)
        }
    },[success])


  
    //tetiklemeyi başlatma
    const PlaceOrderHandler=()=>{
        console.log('order');
        dispatch(createOrder({
            orderItems:card.cardItems,
            shippingAddress:card.shippingAddress,
            paymentMethod:card.paymentMethod,
            itemsPrice:card.itemsPrice,
            shippingPrice:card.shippingPrice,
            taxPrice:card.taxPrice,
            totalPrice:card.totalPrice,
        }))
    }




    const []=useState();

  return (
    <div>
        <CheckOut  s1 s2 s3 s4 />

        <Row >
            <Col md={8}>
                <ListGroup variant='flush'>
                        <ListGroupItem className='my-3'>
                            <h3 style={{color:'red'}}>Shipping</h3>
                            <p>
                                <strong>
                                    Address:
                                </strong> 
                                {card.shippingAddress.address}, {' '}
                                {card.shippingAddress.city}, {' '} 
                                {card.shippingAddress.postCode}, {' '}
                                {card.shippingAddress.country}
                            </p>
                        </ListGroupItem>
                <ListGroupItem className='my-3'>
                    <h3 style={{color:'red'}}>Payment Method</h3>
                    <strong>Method:</strong>
                    {card.paymentMethod}


                </ListGroupItem>

                <ListGroupItem className='my-3'>
                    <h3  style={{color:'red'}}>Order Items</h3>

                    {card.cardItems.length ===0 ? <Message>
                        Your Shopping Cart is Empty </Message> : (
                        <ListGroup 
                        variant="flush">
                            {card.cardItems.map((item,i)=>(<ListGroupItem key={i}>
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
                                ${card.itemsPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Shipping:
                                </Col>
                                <Col>
                                ${card.shippingPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Tax:
                                </Col>
                                <Col>
                                ${card.taxPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                Total:
                                </Col>
                                <Col>
                                ${card.totalPrice}
                                </Col>
                            </Row>
                        </ListGroupItem>
                                <ListGroupItem>
                                    {error && <Message variant='danger'>
                                        {error}</Message>}
                                </ListGroupItem>
                        <ListGroupItem>
                            <div className='text-center'>
                            <Button type='button' className='btn-block btn-danger' disabled={card.cardItems===0} onClick={PlaceOrderHandler}> Place Order
                            </Button>
                            </div>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </Col>
        </Row>


    </div>
  )
}

export default PlaceOrderDisplay