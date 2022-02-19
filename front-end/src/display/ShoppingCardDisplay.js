import React,{ useEffect } from 'react'
import{Link} from 'react-bootstrap';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import { addToCard } from '../action/cardAction'
import {useDispatch, useSelector }from   'react-redux';
import Message from '../component/Message';
import { useParams } from 'react-router-dom';


const ShoppingCardDisplay = (location,history) => {
  const { id } = useParams();
  const productId=useParams()


  const qty=location.search ? Number(location.search.split('=')[1]):1 
  //tanımsız dönüyor anlamadım
  //?qty=1

  /*const dispatch= useDispatch()
  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])*/

  return (
    <div>ShoppingCardDisplay</div>
  )
}

export default ShoppingCardDisplay