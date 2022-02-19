import axios from 'axios'

import {CARD_ADD_ITEM} from '../constant/cardConstant'

export const addToCard =(id,qty)=>async (dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)

  dispatch({
    type:CARD_ADD_ITEM,
    payload:{
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        stock:data.stock,
        qty:data.qty
    }
})
 localStorage.setItem("cardItems",JSON.stringify(getState().card.cardItems))

}