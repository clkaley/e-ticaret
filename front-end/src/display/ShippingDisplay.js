import React ,{useState}from 'react'
//import{Link} from 'react-router-dom'
import {Form,Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../component/FormContainer.js'
import { saveShippingAddress } from '../action/cardAction.js'
import { useNavigate } from 'react-router';
import CheckOut from '../component/CheckOut.js'

const ShippingDisplay = ({history}) => {
  //cart
  const card=useSelector(state=>state.card)
  const {shippingAddress}=card;

  const [address,setAddress]=useState(shippingAddress.address);
  const [city,setCity]=useState(shippingAddress.city);
  const [postCode,setPostCode]=useState(shippingAddress.postCode);
  const [country,setCountry]=useState(shippingAddress.country);


  const dispatch=useDispatch()

  const navigate=useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("submit");
    dispatch(saveShippingAddress({address,city,postCode,country}))
    //history.push('/payment')
    navigate('/payment')
  }

  return (
    <FormContainer >
      <CheckOut  s1 s2  />
        <h1 className="text-center my-3  " style={{color:'red'}}>Shippping</h1>
          <Form onSubmit={submitHandler}>

          <FormGroup 
          className='my-3' 
          controlId='address'>
                <FormLabel>Address</FormLabel>
                <FormControl 
                  type='text' 
                  placeholder='Enter Your Address' 
                  value={address || ''}
                  required
                  onChange={(e)=>setAddress(e.target.value)}>
                </FormControl>
            </FormGroup>

            <FormGroup 
            className='my-3' 
            controlId='city'>
                <FormLabel>City</FormLabel>
                <FormControl 
                  type='text' 
                  placeholder='Enter Your City' 
                  value={city || ''}
                  required
                  onChange={(e)=>setCity(e.target.value)}>
                </FormControl>
            </FormGroup>


            <FormGroup 
            className='my-3' 
            controlId=''>
                <FormLabel>Post Code</FormLabel>
                <FormControl 
                  type='text' 
                  placeholder='Enter Your Post Code' 
                  value={postCode || ''}
                  required
                  onChange={(e)=>setPostCode(e.target.value)}>
                </FormControl>
            </FormGroup>

            <FormGroup 
            className='my-3' 
            controlId='country'>
                <FormLabel>Country</FormLabel>
                <FormControl 
                  type='text' 
                  placeholder='Enter Your Country' 
                  value={country || ''}
                  required
                  onChange={(e)=>setCountry(e.target.value)}>
                </FormControl>
            </FormGroup>


          <div className='text-end'>
              <Button type='submit' variant='primary'
              className='my-2 btn-block btn-danger  '>
                Continue
              </Button>
          </div>
          
          </Form>

    </FormContainer>
  )
}

export default ShippingDisplay