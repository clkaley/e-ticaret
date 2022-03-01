import React ,{useState,useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import FormContainer from '../component/FormContainer.js'
import {register} from '../action/userAction.js'
import { useLocation } from 'react-router-dom';

const RegisterDisplay = ({history}) => {
     //  const redirect=location.search ? location.search.split('=')[1] : '/'
     //const redirect = location.search ? Number(location.search.split('=')[1]) : '/'
     //const location = useLocation();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    //onaylanma state'i
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState(null)

    const dispatch=useDispatch();

    const userRegister=useSelector(state => state.userRegister)
   
    const {loading,error,userInfo}=userRegister

    const { search } = useLocation(); 
    const redirectInUrl = new URLSearchParams(search).get('redirect'); 
    const redirect = redirectInUrl ? redirectInUrl : '/'
    
    //push okunmadığı için hata veriyor
   useEffect(()=>{
        if(userRegister){
          //history.push(redirect)
        }
    },[history,userRegister,redirect])

   

/* 
   useEffect(()=>{
      if(userInfo){
        dispatch(redirect)
      }
    }, [dispatch,userInfo,redirect])
*/

/*
  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])
*/

    const submitHandler=(e)=>{
    e.preventDefault()

    if(password !==confirmPassword){
        setMessage('Password Dont Match')
    }
    //dispatch register
    else{ 
      dispatch(register(name,email,password))
    }

}
  return (

    <FormContainer>
        <h2 className="text-center my-3 text-muted">Sıgn Up</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
        <FormGroup className='my-3' controlId='name'>
                <FormLabel>Name</FormLabel>
                <FormControl type='name' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup className='my-3' controlId='email'>
                <FormLabel>Email Address</FormLabel>
                <FormControl type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup controlId='confirmpassword'>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl type='password' placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></FormControl>
            </FormGroup>
           
           
            <Button type='submit' variant='primary' className='my-3 btn-block btn-danger '>
                Register
            </Button>
         
        </Form>

        <Row className='py-3'>
            <Col className='text-muted'>Have an account? {' '} <Link className='text-danger' to ={redirect ? `/login?redirect=${redirect}` : '/register'}>Log In</Link></Col>
        
        </Row>

    </FormContainer>

  )
}

export default RegisterDisplay