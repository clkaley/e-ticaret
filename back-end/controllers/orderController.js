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



/*
    @desc GET order by id siparişleri çekme
    @route GET/api/orders/:id siparişleri çekme
    @access Private erişimi gizleme
*/ 

const getOrderById=asyncHandler (async(req,res)=>{
    const order=await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order Not Found')
    }
 
 
 })


 
/*
    @desc Update order to paid
    @route GET/api/orders/:id/pay siparişleri çekme
    @access Private erişimi gizleme
*/ 

const updateOrderToPaid=asyncHandler (async(req,res)=>{
    const order=await Order.findById(req.params.id)

    if(order){
        order.isPaid=true
        order.paidAt=Date.now()
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.email_address,  
        }
        const updateOrder=await order.save()
        res.json(updateOrder)

    }else{
        res.status(404)
        throw new Error('Order Not Found')
    }
  
 })


export {addOrderItems,getOrderById,updateOrderToPaid}


