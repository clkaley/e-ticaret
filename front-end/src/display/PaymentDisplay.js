import React ,{useState}from 'react'
//import{Link} from 'react-router-dom'
import {Form,Button, Col,FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../component/FormContainer.js'
import { savePaymentMethod } from '../action/cardAction.js'
import { useNavigate } from 'react-router';
import CheckOut from '../component/CheckOut.js'


const PaymentDisplay = ({history}) => {
  //cart
  const card=useSelector(state=>state.card)
  const {shippingAddress}=card;

  const navigate=useNavigate();

  if(!shippingAddress){
    //history.push('/shipping')
      navigate('/payment')
  }





  const [paymentMethod,setPaymentMethod]=useState('PayPal');



  const dispatch=useDispatch()



  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("payment method");
    dispatch(savePaymentMethod(paymentMethod))
    //history.push('/payment')
      navigate('/placeorder')
  }

  return (
    <FormContainer >
      <CheckOut  s1 s2 s3   />
        <h1 className="text-center my-5  " style={{color:'red'}}>Payment Method</h1>
          <Form onSubmit={submitHandler}>

            <FormGroup className='my-2'>

            <Col>
                 <Form.Check 
                type='radio' 
                label='Paypal or Credit Card' id='PayPal' 
                name='paymentMethod' 
                value='Paypal' 
                checked 
                onChange={(e)=>setPaymentMethod(e.target.value)} 
                >
                </Form.Check>

                 <Form.Check 
                type='radio' 
                label='Other' 
                id='other' 
                name='paymentMethod' 
                value='other' 
                checked 
                onChange={(e)=>setPaymentMethod(e.target.value)} 
                >
                </Form.Check> 
            </Col>
            </FormGroup>

          <div className='text-right'>
              <Button type='submit' variant='primary'
              className='my-2 btn-block btn-danger  '>
                Continue
              </Button>
          </div>
          
          </Form>

    </FormContainer>
  )
}

export default PaymentDisplay