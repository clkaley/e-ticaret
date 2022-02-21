import express from "express";
import{ getProducts,getProductById } from '../controllers/productController.js'
//import Product from '../models/productModel.js'
//import asyncHandler from "express-async-handler";
//import mongoose from "mongoose";

const router =express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)



/*
    desc tüm ürünleri alır
    route GET/api/products
    access ürünleri public hale getirme
*/ 


////controllers için daha temiz hale getirildi
/*router.get('/',asyncHandler(async (req,res) => {
    const products = await Product.find({})

    //redux ta componentler için hata mesajı verme
  //  throw new Error ("some eror")
    res.json(products)
   

  }))*/




/*
    desc tek ürün alır
    route GET/api/products
    access ürünleri public hale getirme
*/ 
//controllers için
/*
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
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
);

*/

/*router.get('/:id',asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message: "Product Not Found"})
    }
    
  }))*/

 
 /* const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
*/


  export default router