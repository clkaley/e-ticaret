import axios from 'axios'
import {CARD_ADD_ITEM,CARD_REMOVE_ITEM, CARD_SAVE_SHIPPING_ADDRESS,CARD_SAVE_PAYMENT_METHOD} from '../constant/cardConstant'


export const addToCard = (id,qty) => async (dispatch,getState) => {

  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type:CARD_ADD_ITEM,
    payload: {
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        stock:data.stock,
        qty
    }
})
 localStorage.setItem('cardItems', JSON.stringify(getState().card.cardItems))

}



export const removeFromCard= (id)=>(dispatch,getState)=>{
  dispatch({
    type:CARD_REMOVE_ITEM,
    payload:id
  })
  localStorage.setItem('cardItems',JSON.stringify(getState().card.cardItems ))
}



export const saveShippingAddress= (data)=>(dispatch)=>{
  dispatch({
    type:CARD_SAVE_SHIPPING_ADDRESS,
   // payload:id
  })
  localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod= (data)=>(dispatch)=>{
  dispatch({
    type:CARD_SAVE_PAYMENT_METHOD,
   // payload:id
  })
  localStorage.setItem('paymentMethod',JSON.stringify(data))
}