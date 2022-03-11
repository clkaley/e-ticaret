import React ,{useState,useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import FormContainer from '../component/FormContainer.js'
import {login} from '../action/userAction.js'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
const LoginDisplay = ({history}) => {
     //  const redirect=location.search ? location.search.split('=')[1] : '/'
     //const redirect = location.search ? Number(location.search.split('=')[1]) : '/'
     //const location = useLocation();
     
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch();

    const userLogin=useSelector(state => state.userLogin)
    //reducers da tanımladığımız loading error kısmını burda içine geçiriyoruz.
    const {loading,error,userInfo}=userLogin

    const { search } = useLocation(); 
    const redirectInUrl = new URLSearchParams(search).get('redirect'); 
    const redirect = redirectInUrl ? redirectInUrl : '/'
    
    const navigate = useNavigate();

    //vs6 da navigate fonk kullanılır.
    //push okunmadığı için hata veriyor
   useEffect(()=>{
        if(userInfo){
          //history.push(redirect)
          navigate(redirect)
        }
    },[history,userInfo,redirect])

    /*useEffect(()=>{
      if(userInfo){
        dispatch(login(redirect))
      }
    }, [dispatch,redirect])
  */
  

    /*
    import { useNavigate } from 'react-router';
    const addToCardHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`)
    };
    */ 

    /*
      const { id } = useParams();
  useEffect(()=>{
          dispatch(listProductDetails(id))
        },[dispatch,match]);

*/ 
   

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
    //dispatch login
    dispatch(login(email,password))
}
  return (

    <FormContainer>
        <h2 className="text-center my-3 text-muted">Sıgn In</h2>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <FormGroup className='my-3' controlId='email'>
                <FormLabel>Email Address</FormLabel>
                <FormControl type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></FormControl>
            </FormGroup>
            <FormGroup controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></FormControl>
            </FormGroup>
           
            <Button type='submit' variant='primary' className='my-3 btn-block btn-danger '>
                Sign In
            </Button>
         
        </Form>

        <Row className='py-3'>
            <Col className='text-muted'>New Photographer ? <Link className='text-danger' to ={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link></Col>
        
        </Row>

    </FormContainer>

  )
}

export default LoginDisplay