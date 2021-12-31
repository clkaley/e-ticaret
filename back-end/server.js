const express =require('express')

const products=require('./data/products')

const app=express()

app.get('/',(reg,res) => {
    res.send("API is running...")
})

app.get('/api/products',(reg,res) => {
  res.json(products)
})


app.listen(5000,console.log("Server Running On Port 5000"))