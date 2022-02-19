//redux için silindi
//import axios from 'axios'
//import React, {useState,useEffect} from 'react'
import React,{useEffect} from 'react'

//redux için eklendi
import {useDispatch,useSelector} from 'react-redux'

//redux için eklnedi
import { listProduct } from '../action/productAction'

import {Col, Container, Row} from 'react-bootstrap'
//import products from '../products'
import Product from '../component/Product'

//redux için message ve loader component ı eklendi
import Message from '../component/Message'
import Loader from '../component/Loader'



const MainDisplay = () => {
     //redux

    //const [products,setProducts] =useState([])
   
   /* useEffect(()=>{
        const fetchProducts= async () => {
            const {data}= await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])*/

    //redux için eklendi

    const dispatch= useDispatch()

    const productList=useSelector(state =>state.productList)
    const {loading,error,products}=productList

    useEffect(() =>{
        dispatch (listProduct())
    }, [dispatch])

    //const products=[]

    return (
        <Container>
            
            {loading ? ( <Loader/> )
             : error ? 
            (<Message variant='danger'>{error}</Message>) : ( <Row>
                  {products.map(product =>(
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />                    
                      </Col>
                  ))}
              </Row>)}
             
        </Container>
    )
}

export default MainDisplay
