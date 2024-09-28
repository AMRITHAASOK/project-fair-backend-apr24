//1 import express
const express = require('express')
//4 import userController
const userController=require('../Controllers/userController')

//2 Create router from express
const router = express.Router()
//3 Create route for each requests
    //1 Register route : http://localhost:3000/api/register
    router.post('/api/register',userController.register)

module.exports = router