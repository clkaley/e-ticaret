import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import{Link, Navigate} from 'react-router-dom'
import {Form,Button, FormGroup, FormLabel, FormControl, FormCheck} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import FormContainer from '../component/FormContainer.js'
import {listProductDetails,updateProduct} from '../action/productAction'
import { useLocation, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { PRODUCT_UPDATE_RESET } from '../constant/productConstant.js'


const ProductEditDisplay = () => {
     //  const redirect=location.search ? location.search.split('=')[1] : '/'
     //const redirect = location.search ? Number(location.search.split('=')[1]) : '/'
     //const location = useLocation();

    // const userId=match.params.id
    const { id:productId  } = useParams()

    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [image,setImage]=useState('')
    const [brand,setBrand]=useState('')
    const [category,setCategory]=useState('')
    const [countInStock,setCountInStock]=useState(0)
    const [description,setDescription]=useState('')
    const [uploading,setUploading]=useState(false)


    const dispatch=useDispatch();

    const productDetails=useSelector(state => state.productDetails)
    const {loading,error,product}=productDetails


    const productUpdate=useSelector(state => state.productUpdate)
    const { loading:loadingUpdate,
            error:errorUpdate,
            success:successUpdate
          }=productUpdate

    const navigate=useNavigate();

    //push okunmadığı için hata veriyor
   useEffect(()=>{

        if(successUpdate){
            dispatch({type:PRODUCT_UPDATE_RESET})
            navigate('/admin/productlist')
        } else{

            if(!product.name || product._id !== productId ){
                dispatch(listProductDetails(productId))
              }else{
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
              }
        }

    },[dispatch,productId,product,successUpdate])

   const uploadFileHandler=async(e)=>{
       const file=e.target.files[0]
       const formData=new FormData()
       formData.append('image',file)
       setUploading(true)
       try{
        const config ={
            header:{
                'Content-Type':'multipart/form-data'
            }
        }
        const {data}=await axios.post('/api/upload',formData,config)

        setImage(data)

        setUploading(false)
       }catch{
        console.log(error);
        setUploading(false)
       }
   }

    const submitHandler=(e)=>{
    e.preventDefault()
    //güncelleme işlemi
        dispatch(updateProduct({
            _id:productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        }))

}
  return (
      <>
     
        <Link to='/admin/productlist' className='btn-light btn btn-primary  '>
            Go Back
        </Link>
      
        <FormContainer>
        <h2 className="text-center my-3 text-muted">Edit Product</h2>

        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>} 
        {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message> : (
             <Form onSubmit={submitHandler}>
             <FormGroup className='my-3' controlId='name'>
                     <FormLabel>Name</FormLabel>
                     <FormControl type='name' placeholder='Enter  Name' value={name || ''} onChange={(e)=>setName(e.target.value)}></FormControl>
                 </FormGroup>
     
                 <FormGroup className='my-3' controlId='price'>
                     <FormLabel>Price </FormLabel>
                     <FormControl type='number' placeholder='Enter  Price' value={price || ''} onChange={(e)=>setPrice(e.target.value)}></FormControl>
                 </FormGroup>
     
                 <FormGroup controlId='image'>
                     <FormLabel>Image </FormLabel>
                     <FormControl type='text' placeholder='Enter  Image URL' value={image || ''} onChange={(e)=>setImage(e.target.value)}></FormControl>
                     <FormControl 
                     type='file'
                     label='Choose File'
                     onChange={uploadFileHandler}></FormControl>{uploading && <Loader/>}
                 </FormGroup>
                 
                 <FormGroup controlId='brand'>
                     <FormLabel>Brand </FormLabel>
                     <FormControl type='text' placeholder='Enter  brand ' value={brand || ''} onChange={(e)=>setBrand(e.target.value)}></FormControl>
                 </FormGroup>

                 <FormGroup className='my-3' controlId='countInStock'>
                     <FormLabel>countInStock </FormLabel>
                     <FormControl type='number' placeholder='Enter  countInStock' value={countInStock || ''} onChange={(e)=>setCountInStock(e.target.value)}></FormControl>
                 </FormGroup>

                 <FormGroup controlId='category'>
                     <FormLabel>category </FormLabel>
                     <FormControl type='text' placeholder='Enter  Category ' value={category || ''} onChange={(e)=>setCategory(e.target.value)}></FormControl>
                 </FormGroup>

                 
                 <FormGroup controlId='description'>
                     <FormLabel>description </FormLabel>
                     <FormControl type='text' placeholder='Enter  description ' value={description || ''} onChange={(e)=>setDescription(e.target.value)}></FormControl>
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

export default ProductEditDisplay