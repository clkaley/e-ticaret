import React ,{useState,useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Form,Button, FormGroup, FormLabel, FormControl, FormCheck} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import FormContainer from '../component/FormContainer.js'
import {getUserDetails} from '../action/userAction.js'
import { useLocation, useParams} from 'react-router-dom';


const UserEditDisplay = ({history}) => {
     //  const redirect=location.search ? location.search.split('=')[1] : '/'
     //const redirect = location.search ? Number(location.search.split('=')[1]) : '/'
     //const location = useLocation();

    // const userId=match.params.id
    const { id:userId  } = useParams()

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [isAdmin,setIsAdmin]=useState(false)

    const dispatch=useDispatch();

    const userDetails=useSelector(state => state.userDetails)
   
    const {loading,error,user}=userDetails


    //push okunmadığı için hata veriyor
   useEffect(()=>{
      if(!user.name || user._id !== userId ){
        dispatch(getUserDetails(userId))
      }else{
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    },[dispatch,userId,user])

   

    const submitHandler=(e)=>{
    e.preventDefault()

}
  return (
      <>
     
        <Link to='/admin/userlist' className='btn-light btn btn-primary  '>
            Go Back
        </Link>
      
        <FormContainer>
        <h2 className="text-center my-3 text-muted">Edit User</h2>
        {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message> : (
             <Form onSubmit={submitHandler}>
             <FormGroup className='my-3' controlId='name'>
                     <FormLabel>Name</FormLabel>
                     <FormControl type='name' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}></FormControl>
                 </FormGroup>
     
                 <FormGroup className='my-3' controlId='email'>
                     <FormLabel>Email Address</FormLabel>
                     <FormControl type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></FormControl>
                 </FormGroup>
     
                 <FormGroup controlId='isadmin'>

                     <FormCheck 
                     type='checkbox' 
                     label='Is Admin' 
                     value={isAdmin} 
                     checked={isAdmin}
                     onChange={(e)=>setIsAdmin(e.target.checked)}>

                     </FormCheck>
                    
                 </FormGroup>
     

                
                
                 <Button type='submit' variant='primary' className='my-3 btn-block btn-danger '>
                    Update
                 </Button>
              
             </Form>

        )}

    </FormContainer>
      </>

    

  )
}

export default UserEditDisplay