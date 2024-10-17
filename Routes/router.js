//1 import express
const express = require('express')
//4 import userController
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware  = require('../Middlewares/jwtMiddleware')
const multerConfig  = require('../Middlewares/multerMiddleware')
//2 Create router from express
const router = express.Router()

//3 Create route for each requests
//1 Register route : http://localhost:3000/api/register
router.post('/api/register', userController.register)

//2 login route : http://localhost:3000/api/login
router.post('/api/login', userController.login)

//3 add project route : http://localhost:3000/api/addProject
router.post('/api/addProject',jwtMiddleware,multerConfig.single('projectImg'),projectController.addProject)


//4 get all project - find()
router.get('/api/getAllProjects',jwtMiddleware,projectController.getAllProjects)

//5 get all projects of particular user - find({userId})
router.get('/api/getUserProjects',jwtMiddleware,projectController.getUserProjects)

//6 get home project(3) find().limit(3)
router.get('/api/getHomeProjects',projectController.getHomeProjects)

//update
router.put('/api/update/:projectId',jwtMiddleware,multerConfig.single('projectImg'),projectController.editProject)

//delete
router.delete('/api/delete/:projectId',jwtMiddleware,projectController.deleteProject)

module.exports = router