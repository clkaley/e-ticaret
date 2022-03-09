import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {cardReducer} from './reducers/cardReducers'
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer} from './reducers/userReducers'

import {orderCreateReducer,orderDetailsReducer} from './reducers/orderReducers'




const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    card:cardReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
})



//card bilgilerini local e kaydetme
const cardItemsFromStorage=
localStorage.getItem("cardItems") ? 
JSON.parse(localStorage.getItem("cardItems")): []

//kullanıcı bilgilerini local e kaydetme
const userInfoFromStorage=
localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo")) : []


//adres bilgileri için
const shippingAddresFromStorage=
localStorage.getItem("shippingAddress") ?
JSON.parse(localStorage.getItem("shippingAddress")) :{
    
}


const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {};
 


const initialState={
    card: { 
        cardItems : cardItemsFromStorage,shippingAddress:shippingAddresFromStorage,
        paymentMethod: paymentMethodFromStorage,

    },
    userLogin:{
        userInfo:userInfoFromStorage
    },

    
};


const middleLayer=[thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleLayer)))


export default  store 