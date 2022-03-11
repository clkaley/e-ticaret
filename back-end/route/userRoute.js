import express from "express";
import{ authUsers,getUserProfile,registerUser,updateUserProfile,getUsers} from '../controllers/userController.js'
import { protect,admin } from "../middleLayer/authenticationMiddleLayer.js";
//import Product from '../models/productModel.js'
//import asyncHandler from "express-async-handler";
//import mongoose from "mongoose";

const router =express.Router()
//router.route('/').post(registerUser)
router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUsers)

//router.route('/profile').get(getUserProfile)
//router.route('/profile').get(protect,getUserProfile)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

export default router

