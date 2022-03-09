import React ,{useState,useEffect}from 'react'
//import{Link} from 'react-router-dom'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl,Table} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import {getUserDetails,updateUserProfile} from '../action/userAction.js'
//action js den çekildi
import {listMyOrders} from '../action/orderAction'
//import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

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

    //store js içinden çekildi
    const orderList=useSelector(state => state.orderList)
    const {loading:loadingOrders, error:errorOrders,orders}= orderList;

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
                dispatch(listMyOrders())
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
    <Row className='my-4'>
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
           
           <div className='text-center'>
            <Button type='submit' variant='primary' className='my-3 btn-block btn-danger '>
               Update Info
            </Button>
            </div>
        </Form>
        </Col>

        <Col md={9} className="my-3 text-center ml-2" >
            <h2  style={{color:'red'}}>My Orders </h2>
            {loadingOrders ? <Loader /> : errorOrders ?<Message variant='danger'>{errorOrders}</Message> :(
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                                Paid
                            </th>
                            <th>
                                Delivered
                            </th>

                            <th>

                            </th>
                        </tr>
                    </thead>    

                    <tbody>
                        {orders.map(order=>(

                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0,10): (
                                    <i className='fas fa-times' style={{color:'red'}}></i>
                                )}</td>
                                 <td>{order.isdelivered ? order.deliveredAt.substring(0,10): (
                                    <i className='fas fa-times' style={{color:'red'}}></i>
                                )}</td> 
                                <td>
                                  <Link to={`/order/${order._id}`} >
                                      <Button className='btn-sm' variant='light'>Details</Button>
                                      
                                      </Link> 
                        </td>                           
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
            }
        </Col>
    </Row>
  )
}

export default ProfileDisplay