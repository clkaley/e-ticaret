import axios from 'axios'
import {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS} from '../constant/productConstant'





export const listProduct = () => async (dispatch) => {
    try{
        dispatch({
            typpe:PRODUCT_LIST_REQUEST
        })

        const{data} =await axios.get('/api/products')

        dispatch({
            typpe:PRODUCT_LIST_SUCCESS,
            payload:data
            })
    }
     catch(error){
         dispatch({
             typpe:PRODUCT_LIST_FAIL,
             payload:error.response && error.response.data.message ? error.response.data.message : error.message
         })

     }

}