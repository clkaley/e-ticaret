import express from 'express'
//const express =require('express')

import dotenv from 'dotenv'
//const dotenv=require('dotenv')

import products from './data/products.js'
//const products=require('./data/products')

dotenv.config()


const app=express()

//çalıştığını gösteren
app.get('/',(req,res) => {
    res.send("API is runnings... :) ")
})

//ürünleri gösteren
app.get('/api/products',(req,res) => {
  res.json(products)
})

//ürünleri id ile gösteren
app.get('/api/products/:id',(req,res) => {
  const product =products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT =process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} Port ${PORT}`))