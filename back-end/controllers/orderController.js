import Order from '../models/orderModel.js'
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

/*
    @desc create new order sipariş oluşturma
    @route POST/api/ORDERS siparişleri çekme
    @access Private erişimi gizleme
*/ 

const addOrderItems=asyncHandler (async(req,res)=>{
   const {orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice}=
    req.body

    if(orderItems && orderItems.length===0){
        res.status(400)
        throw new Error ('No Order Items')
        return
    }else{
       const order=new Order({
        orderItems,
        user:req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
       })

       const createOrder= await order.save()
       //201 => bu talebin sadece başarılı olmadığını, aynı zamanda bir kaynağın da yaratıldığını gösterir.
       res.status(201).json(createOrder)

    }


})

export {addOrderItems}