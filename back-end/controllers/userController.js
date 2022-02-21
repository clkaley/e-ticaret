import User from '../models/userModel.js'
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

/*
    @desc user token
    @route POST/api/users/login
    @access ürünleri public hale getirme
*/ 

const authUsers=asyncHandler (async(req,res)=>{
        const {email,password}=req.body
       // res.send({email,password})
       const user=await User.findOne({email})
       if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:null
            })
       }
       else{
           res.status(401)
           throw new Error("Invalid Email or Password")
       }
})
export{
    authUsers
}