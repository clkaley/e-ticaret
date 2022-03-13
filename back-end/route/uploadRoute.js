import express from "express";
import  path  from "path";
import multer from "multer";

const router=express.Router()


//req-request file-dosya cb-callback
const storage=multer.diskStorage({
    destination(req,file,cb){
        //cb(null,'uploads/')
        cb(null, "front-end/public/image-products")
    },
    
    filename(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file,cb){
    const filetypes=/jpg|jpeg|png/
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype=filetypes.test(file.mimetype)

    if(extname  && mimetype){
        return cb(null,true)
    }else{
        cb('Just Image ! ')
    }
}

const upload=multer({
    storage,
    fileFilter:function(req,file,cb){
        checkFileType(file,cb)
    }
})

router.post('/',upload.single('image'),(req,res)=>{
    //res.send(`${req.file.path}`)
    res.send(`/image-products/${req.file.filename}`)
})


export default router