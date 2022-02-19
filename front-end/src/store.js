import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {cardReducer} from './reducers/cardReducers'




const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    card:cardReducer
})

const cardItemsFromStorage=localStorage.getItem("cardItems") ? JSON.parse(localStorage.getItem("cardItems")) : []


const initialState={
    card:{cardItems:cardItemsFromStorage}
}


const middleLayer=[thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleLayer)))


export default  store 