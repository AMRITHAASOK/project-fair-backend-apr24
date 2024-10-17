//1 load .env file
require('dotenv').config()
//2 import express
const express = require('express')
//3 import cors
const cors = require('cors')
//10 import router
const router = require('./Routes/router')
const appliactionMiddleware = require('./Middlewares/applicationMiddleware')
//9 import DB
require('./DB/connection')

//4 create an application using expres
const pfServer = express()

//5 use
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(appliactionMiddleware)
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads')) //image exporting to frontend 
//port creation
//6 Define port number
const PORT = 3000 || process.env.PORT

//7 Define listen
pfServer.listen(PORT,(req,res)=>{
    console.log("pfServer started at port " + PORT);  
})

//8 Define client request : 
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Project Fair Server started...Waiting for the client request</h1>`)
})