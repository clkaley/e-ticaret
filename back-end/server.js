const express =require('express')

const products=require('./data/products')

const app=express()

//çalıştığını gösteren
app.get('/',(reg,res) => {
    res.send("API is running...")
})

//ürünleri gösteren
app.get('/api/products',(reg,res) => {
  res.json(products)
})

//ürünleri id ile gösteren
app.get('/api/products/:id',(reg,res) => {
  const product =products.find((p) => p._id===req.params.id)
  res.json(product)
})





app.listen(5000,console.log("Server Running On Port 5000"))