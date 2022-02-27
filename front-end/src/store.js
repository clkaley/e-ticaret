import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {cardReducer} from './reducers/cardReducers'
import {userLoginReducer} from './reducers/userReducers'




const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    card:cardReducer,
    userLogin:userLoginReducer,
})


//card bilgilerini local e kaydetme
const cardItemsFromStorage=
localStorage.getItem("cardItems") ? 
JSON.parse(localStorage.getItem("cardItems")): []

//kullanıcı bilgilerini local e kaydetme
const userInfoFromStorage=
localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo")) : []


const initialState={
    card: { cardItems : cardItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage},
    
};


const middleLayer=[thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleLayer)))


export default  store 