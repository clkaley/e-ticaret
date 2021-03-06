import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer,productDeleteReducer,productCreateReducer,productUpdateReducer,productReviewCreateReducer,productTopRatedReducer} from './reducers/productReducers'
import {cardReducer} from './reducers/cardReducers'
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer,userListReducer,userDeleteReducer,userUpdateReducer,} from './reducers/userReducers'
import {orderCreateReducer,orderDetailsReducer,orderPayReducer,orderListReducer,orderListAdminReducer} from './reducers/orderReducers'




const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    productTopRated:productTopRatedReducer,
    card:cardReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer, 
    userUpdate:userUpdateReducer, 
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderList:orderListReducer,
    orderListAdmin:orderListAdminReducer,
})



//card bilgilerini local e kaydetme
const cardItemsFromStorage=
localStorage.getItem("cardItems") ? 
JSON.parse(localStorage.getItem("cardItems")): []

//kullanıcı bilgilerini local e kaydetme
const userInfoFromStorage=
localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo")) : null
// [] değiştik null yaptık

//adres bilgileri için
const shippingAddresFromStorage=
localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')) 
:
{};


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