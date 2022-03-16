import React ,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Carousel,Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import{listTopProducts} from '../action/productAction'
import { useDispatch,useSelector } from 'react-redux'

const ProductCarousel = () => {
    const dispatch =useDispatch()

    const productTopRated=useSelector(state=>state.productTopRated)
    const {loading,error,product}=productTopRated

    useEffect(()=>{
        dispatch(listTopProducts())
    },[dispatch])

  return  loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>  : (
      <Carousel pause='hover'
      className='bg-light'>
           {product.map((item) => (
                <Carousel.Item key={item._id}>
                  <Link to={`/product/${item._id}`}>
                      <Image src={item.image} alt={item.name} fluid />

                      <Carousel.Caption className='carousel-caption'>
                          <h4>{item.name}</h4>
                      </Carousel.Caption>
                  </Link>
              </Carousel.Item>
          ))}
      </Carousel>
  )
}

export default ProductCarousel