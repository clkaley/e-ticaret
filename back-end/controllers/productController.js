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


   /*
    id: '1',
    name: ' instax',
    image: '/images/airpods.jpg',
    description:'lorem ipsum'
    brand: 'fuji',
    category: 'Electronics',
    price: $ 80,
    countInStock: 10,
    rating: 4.5,
    total_comments: 12,
    */ 
/*
    @desc create product
    @route POST/api/products/
    @access private admin user
*/ 
const createProduct=asyncHandler (async(req,res)=>{
    const product =new Product({
        name:'Sample Name',
        price:0,
        user:req.user._id,
        image:'/image-products/instax.png',
        brand:'sample',
        countInStock:0,
       /* rating:0,
        total_comments:0,*/
        category:'sample cat',
        description:'Sample desc'
    })
    const createdProduct=await product.save()
    res.status(201).json(createdProduct)
})


/*
    @desc update product
    @route PUT/api/products/:id
    @access private admin user
*/ 
const updateProduct=asyncHandler (async(req,res)=>{
    const {
        name,
        price,
        description,
        image,
        brand,
        countInStock,
        category
    }=req.body

    const product =await Product.findById(req.params.id)

    if(product){

        product.name=name,
        product.price=price,
        product.description=description,
        product.image=image,
        product.brand=brand,
        product.category=category,
        product.countInStock=countInStock

        const updatedProduct=await product.save()
        res.json(updatedProduct)

    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }

})



export {getProductById,
        getProducts,
        deleteProduct,
        createProduct,
        updateProduct
    }