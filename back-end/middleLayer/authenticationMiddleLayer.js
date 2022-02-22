import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from '../models/userModel.js';

const protect = asyncHandler (async (req,res,next)=>{
    let token 
    //header dersek postmanden çekilen token başraılı der ama headers yazıp loglarsak terminal den bizim token ı görebiliriz.
    /*console.log(req.headers.authorization)
    next()*/
    //bearer taşıyıcımız
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //console.log("Token Find");
        try {
            token=req.headers.authorization.split(' ')[1]
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            //console.log(decoded);
            req.user=await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error ("Token Failed , Not Authentication")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("No Token , No Authentication")
    }
    //next()

})



export  {protect};