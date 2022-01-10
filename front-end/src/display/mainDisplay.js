import axios from 'axios'
import React, {useState,useEffect} from 'react'
//import React,{useEffect} from 'react'
//import {useDispatch,useSelector} from 'react-redux'
//import { listProduct } from '../action/productAction'
import {Col, Container, Row} from 'react-bootstrap'
//import products from '../products'
import Product from '../component/Product'



const MainDisplay = () => {
    const [products,setProducts] =useState([])

    useEffect(()=>{
        const fetchProducts= async () => {
            const {data}= await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts()
    }, [])

   // const dispatch= useDispatch()

  /*  useEffect(() =>{
        dispatch (listProduct())
    }, [dispatch])*/

    //const products=[]

    return (
        <Container>
           
              <Row>
                  {products.map(product =>(
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />                    
                      </Col>
                  ))}
              </Row>
        </Container>
    )
}

export default MainDisplay
