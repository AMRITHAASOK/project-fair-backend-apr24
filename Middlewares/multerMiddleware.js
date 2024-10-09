const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename = `image${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})
const fileFilter = (req,file,callback)=>{
    console.log(file);
    
    if(file.mimetype ==='image/jpeg' || file.mimetype==='image/jpg'|| file.mimetype ==='image/png'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("Invalid file format"))
    }
}
const multerConfig = multer ({
    storage,
    fileFilter,
})

module.exports = multerConfig