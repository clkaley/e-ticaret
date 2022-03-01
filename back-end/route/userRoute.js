import express from "express";
import{ authUsers,getUserProfile,registerUser,updateUserProfile} from '../controllers/userController.js'
import { protect } from "../middleLayer/authenticationMiddleLayer.js";
//import Product from '../models/productModel.js'
//import asyncHandler from "express-async-handler";
//import mongoose from "mongoose";

const router =express.Router()
router.route('/').post(registerUser)
router.post('/login',authUsers)

//router.route('/profile').get(getUserProfile)
//router.route('/profile').get(protect,getUserProfile)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

export default router

