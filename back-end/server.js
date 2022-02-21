import express from 'express'
//const express =require('express')

import dotenv from 'dotenv'
//const dotenv=require('dotenv')
//import products from './data/products.js'
//const products=require('./data/products')
import colors from 'colors'
//database import edildi
import connectDB from "./config/database.js"


import productRoute from "./route/productRoute.js"
import userRoute from "./route/userRoute.js"


import {notFound,errHandler} from './middleLayer/middleLayerError.js'

dotenv.config()


connectDB()

const app=express()

//user & authentication
app.use(express.json())

//postman ve vs code entegrasyonu çalışıyor mu?
/*app.use((req,res,next) =>{
      //console.log("hello")
      console.log(req.originalUrl)
      next()
})
*/


//çalıştığını gösteren
app.get('/',(req,res) => {
    res.send("API is runnings... :) ")
})




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

app.use('/api/products/',productRoute)
app.use('/api/users',userRoute)


//artık middleLayera aldık url kontrolü
/*app.use((req,res,next)=>{
  const error = new Error (`${req.originalUrl}- Not Found`)
  res.status(404)
  next(error)
} )
*/
app.use(notFound)


//artık middleLayer a aldık id kontorolü
/*app.use((err,req,res,next)=>{
    const statusCode=res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
      message: err.message,
      stack:process.env.NODE_ENV === 'production' ? null : err.stack,
    })

})*/
app.use(errHandler)

const PORT =process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} Port ${PORT}`.rainbow))