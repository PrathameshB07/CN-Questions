const express=require('express')
const router=express.Router();


//import controller
const {createTodo} = require('../controllers/createTodo')
const {updateTodo} = require('../controllers/updateTodo')

//define API route
router.post('/createTodo',createTodo)

router.put('/updateTodo/:id',updateTodo)



module.exports=router;