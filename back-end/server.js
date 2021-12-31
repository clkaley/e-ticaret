const express =require('express')

const products=require('./data/products')

const app=express()

//çalıştığını gösteren
app.get('/',(req,res) => {
    res.send("API is running...")
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





app.listen(5000,console.log("Server Running On Port 5000"))