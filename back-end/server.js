const express =require('express')

const app=express()

app.get('/',(reg,res) => {
    res.send("API is running...")
})

app.listen(5000,console.log("Server Running On Port 5000"))