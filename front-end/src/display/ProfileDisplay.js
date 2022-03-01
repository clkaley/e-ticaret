import React ,{useState,useEffect}from 'react'
//import{Link} from 'react-router-dom'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import {getUserDetails,updateUserProfile} from '../action/userAction.js'
//import { useLocation } from 'react-router-dom';

const ProfileDisplay = ({history}) => {
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

    const userDetails=useSelector(state => state.userDetails)
    const {loading,error,user}=userDetails


    const userLogin=useSelector(state => state.userLogin)
    const {userInfo}=userLogin


    const userUpdateProfile=useSelector(state => state.userUpdateProfile)
    const {success}=userUpdateProfile

   // const { search } = useLocation(); 
   /* const redirectInUrl = new URLSearchParams(search).get('redirect'); 
    const redirect = redirectInUrl ? redirectInUrl : '/'
    */
    
    //push okunmadığı için hata veriyor
   useEffect(()=>{
        if(!userInfo){
         // history.push('/login')
        }
        else{
            if(!user.name ){
                dispatch(getUserDetails('profile'))
            }else{
                //console.log(user.name)
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch,history,userInfo,user])

   

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
    else{
        //update dispatch
        dispatch(updateUserProfile({id:user._id,name,email,password}))
    }

}
  return (
    <Row>
        <Col md={3}>
        <h2 className="text-center my-3 text-muted">User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Update Profile Information </Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
        <FormGroup className='my-3' controlId='name'>
                <FormLabel>Name</FormLabel>
                <FormControl type='name' placeholder='Enter Your Name' value={name || ''} onChange={(e)=>setName(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup className='my-3' controlId='email'>
                <FormLabel>Email Address</FormLabel>
                <FormControl type='email' placeholder='Enter Your Email' value={email || ''} onChange={(e)=>setEmail(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup className='my-3' controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></FormControl>
            </FormGroup>

            <FormGroup className='my-3' controlId='confirmpassword'>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl type='password' placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></FormControl>
            </FormGroup>
           
           
            <Button type='submit' variant='primary' className='my-3 btn-block btn-danger '>
               Update Info
            </Button>
         
        </Form>
        </Col>

        <Col md={9} className="my-5 px-3 text-center" >
            <h2>My Orders </h2>
        </Col>
    </Row>
  )
}

export default ProfileDisplay