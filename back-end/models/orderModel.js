import mongoose from 'mongoose'

//7.03 tarihinde order hata verdiği için price ve taksitlendirmeleri Number olduğu halde string olarak değiştirdim
const orderSchema=mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems: [
        {
            name:{
                type:String,
                required:true
            },
            //quantity
            qty:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:String,
                required:true
            },
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            }
        }
    ],
    shippingAddress: {
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }  
    },

    paymentMethod: {
        type:String,
        required:true,
    },
    paymentResult: {
        id:{
            type:String
        },
        status:{
            type:String
        },
        updateTime:{
            type:String
        },
        emailAddress:{
            type:String
        },
       
    },
    taxPrice: {
        type:String,
        required:true,
        default:0.0,
    },
    shippingPrice: {
        type:String,
        required:true,
        default:0.0,
    },
    totalPrice: {
        type:String,
        required:true,
        default:0.0,
    },
    isPaid: {
        type:Boolean,
        required:true,
        default:false,
    },
    /*taxPrice: {
        type:Number,
        required:true,
        default:0.0,
    },*/
    paidAt:{
        type:Date,
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false,
    },
    deliveredAt:{
        type:Date,
    },
}, {
    timestamps:true
}

)

const Order= mongoose.model('Order',orderSchema)

export default Order