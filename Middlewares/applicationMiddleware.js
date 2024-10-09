const appliactionMiddleware =(req,res,next)=>{
    console.log("Inside the application middleware");
    next()
}
module.exports=appliactionMiddleware;