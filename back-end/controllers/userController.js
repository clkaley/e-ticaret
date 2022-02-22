import User from '../models/userModel.js'
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import generateToken from '../utils/generateToken.js';


/*
    @desc Register a new  user
    @route POST/api/users
    @access ürünleri public hale getirme
*/ 
//kullanıcı kaydetme
const registerUser=asyncHandler (async(req,res)=>{
        const {name,email,password}=req.body
       // res.send({email,password})
       const userExist=await User.findOne({email})
       if(userExist){
        res.status(400)
        throw new Error('User exist') //kayıt var
       }
       const user= await User.create(
           {
               name,
               email,
               password
           }

       )
       if(user){
           res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
           })
       }
       else{
           res.status(404)
           throw new Error("Invalid User Info")
       }
})

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
            token:generateToken(user._id)
        })
   }
   else{
       res.status(401)
       throw new Error("Invalid Email or Password")
   }
})



/*
    @desc GET user Profile
    @route POST/api/users/login
    @access Gizleme (private)
*/ 

const getUserProfile=asyncHandler (async(req,res)=>{
    //res.send('Success :)')
    const user= await User.findById(req.user._id)

    if(user){
        res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error("User Not Found")
    }
})


export{
    authUsers,getUserProfile,registerUser
}