import React,{ useEffect } from 'react'
import{Link} from 'react-bootstrap';
import {useDispatch, useSelector }from   'react-redux';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import { addToCard } from '../action/cardAction'
import Message from '../component/Message';
//import { useParams } from 'react-router-dom';
import { useLocation, useParams, useHistory } from 'react-router-dom'


const ShoppingCardDisplay = (location) => {

  const { id: productId } = useParams()

  const qty = new URLSearchParams(useLocation().search).get('qty')
  

  const dispatch= useDispatch();

  const card=useSelector(state=>state.card)
  const {cardItems}=card;
  console.log(cardItems);

  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])
 
 /* const { id } = useParams();
  const productId=useParams();*/

/*
  const qty=location.search ? Number(location.search.split('=')[1]) : 1
*/

  //const productId = match.params.id
  /*const qty = location.search ? Number(location.search.split('=')[1]) : 1;


  const dispatch= useDispatch();
  
  useEffect(()=>{
    if(productId){
      dispatch(addToCard(productId,qty))
    }
  }, [dispatch,productId,qty])
*/

  //console.log(qty);

 
 
  /* const { id } = useParams();
  const productId=useParams()


  const qty=location.search ? Number(location.search.split('=')[1]):1 */
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