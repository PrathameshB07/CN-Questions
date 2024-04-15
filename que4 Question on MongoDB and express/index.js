const express=require('express')

const app=express()

//load config from env file
require('dotenv').config();

const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json())


//import the routes for todo api
const todoRoutes=require('./routes/todos')

//mount the todo api routes
app.use('/api/v1',todoRoutes)  //--> 'localhost/api/v1/createTodo

//start server
app.listen(PORT,()=>{
    console.log(`Sever started at ${PORT}`)
})

//connect to db
const dbConnect=require('./config/database')

dbConnect();


//default route
app.get('/',(req,res)=>{
    res.send(`<h1>This is Home Page</h1>`)
})