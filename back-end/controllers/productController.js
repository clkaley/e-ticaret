import Product from '../models/productModel.js'
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

/*
    @desc tüm ürünleri alır
    @route GET/api/products
    @access ürünleri public hale getirme
*/ 

const getProducts=asyncHandler (async(req,res)=>{
    const products = await Product.find({})
    res.json(products)
})

/*
    @desc tüm ürünleri alır
    @route GET/api/products
    @access ürünleri public hale getirme
*/ 
const getProductById=asyncHandler (async(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404)
            throw new Error ('Product not Found')
            };
        }
     else {
        res.status(404).json({
            message: "Invalid ID. Product not found",
        });
    }


})


/*
    @desc delete product
    @route DELETE/api/products/:id
    @access private admin user
*/ 
const deleteProduct=asyncHandler (async(req,res)=>{
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove()
            res.json({message: 'product removed'})
        } else {
            res.status(404)
            throw new Error ('Product not Found')
            };
        }
     else {
        res.status(404).json({
            message: "Invalid ID. Product not found",
        });
    }


})



export {getProductById,getProducts,deleteProduct}