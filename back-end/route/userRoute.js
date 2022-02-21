import express from "express";
import{ authUsers} from '../controllers/userController.js'
//import Product from '../models/productModel.js'
//import asyncHandler from "express-async-handler";
//import mongoose from "mongoose";

const router =express.Router()

router.post('/login',authUsers)



export default router

