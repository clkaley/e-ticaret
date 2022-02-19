import {CARD_ADD_ITEM} from '../constant/cardConstant'


export const cardReducer =(state ={
    cardItems:[]
},action)=>{
    switch(action.type){
        case CARD_ADD_ITEM:
            const item=action.payload
            const existItem=state.cardItems.find(x=>x.product===item.product)
            if(existItem){
                return{
                    ...state,
                    cardItems:state.cardItems.map(x=>x.product===existItem.product ? item : x)
                }
            }else{
                return{
                    ...state,
                    cardItems:[...state.cardItems,item]
                }
            }
        default:
            return state
    }

}