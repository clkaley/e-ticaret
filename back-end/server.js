import express from 'express'
//const express =require('express')
import path from 'path'
import dotenv from 'dotenv'
//const dotenv=require('dotenv')
//import products from './data/products.js'
//const products=require('./data/products')
import colors from 'colors'
//database import edildi
import connectDB from "./config/database.js"


import productRoute from "./route/productRoute.js"
import userRoute from "./route/userRoute.js"
import orderRoute from "./route/orderRoute.js"
import uploadRoute from "./route/uploadRoute.js"

import {notFound,errHandler} from './middleLayer/middleLayerError.js'

dotenv.config()


connectDB()

const app=express()

//user & authentication
app.use(express.json())




//çalıştığını gösteren
app.get('/',(req,res) => {
    res.send("API is runnings... :) ")
})


app.use('/api/products/',productRoute)
app.use('/api/users',userRoute)
app.use('/api/orders',orderRoute)
app.use('/api/upload',uploadRoute)

/*const __dirname=path.resolve()
app.use('uploads',express.static(path.join(__dirname,'/uploads')))*/
const __dirname = path.resolve() 
app.use(express.static(path.join(__dirname, "/front-end/public")))



app.use(notFound)
app.use(errHandler)


const PORT =process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} Port ${PORT}`.rainbow))


//artık middleLayer a aldık id kontorolü
/*app.use((err,req,res,next)=>{
    const statusCode=res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
      message: err.message,
      stack:process.env.NODE_ENV === 'production' ? null : err.stack,
    })

})*/


//artık middleLayera aldık url kontrolü
/*app.use((req,res,next)=>{
  const error = new Error (`${req.originalUrl}- Not Found`)
  res.status(404)
  next(error)
} )
*/


//ürünleri gösteren
/*
app.get('/api/products',(req,res) => {
  res.json(products)
})
*/

//ürünleri id ile gösteren
/*
app.get('/api/products/:id',(req,res) => {
  const product =products.find((p) => p._id === req.params.id)
  res.json(product)
})
*/


//postman ve vs code entegrasyonu çalışıyor mu?
/*app.use((req,res,next) =>{
      //console.log("hello")
      console.log(req.originalUrl)
      next()
})
*/