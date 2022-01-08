import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/user-model.js'
import Order from './models/order-model.js'
import Product from './models/product-model.js'
import connectDB from './config/database.js'


dotenv.config()

connectDB()

const impData= async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       const createUsers= await User.insertMany(users)
       const adminUser=createUsers[0]._id

       const sampleProducts=products.map(product => {
           return {
               ...product,user:adminUser
           }
       } )

       await Product.insertMany(sampleProducts)
       console.log('Data Important '.green)
    }
    
    catch(error){
        console.error(`${error}`.red)
        process.exit(1)
    }

}


const destData= async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       console.log('Data destroyed '.red.inverse)
    }
    
    catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }

}

if (process.argv[2]=== '-d'){
    destData()
} else{
    impData()
}

