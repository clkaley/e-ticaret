import express from "express";
import{ authUsers,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser,
    getUserById} from '../controllers/userController.js'
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



//back-end de silme işlemi başarısız
router.route('/:id')
.delete(protect, admin, deleteUser)
.get(protect,admin,getUserById)
.put(protect,admin,updateUser)

export default router

