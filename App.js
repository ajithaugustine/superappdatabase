const express = require ('express')
const cors = require('cors')
const app = express()
const connectDB = require ('./Mongodb')
require('dotenv').config()
const Data = require ("./Models/DataModel")



connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/',async(req,res)=>{
     const data =await Data.create(req.body)
     res.send(data)
})

app.get('/',async(req,res)=>{
  const data = await  Data.find()
  res.send(data)
})


// Error handler
app.use((err,req,res,next)=>{
    res.status (err.status || 500)
    res.send({
        error:{
            status:err.status||500,
            message:err.message
        }
    })
})





const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`port is running on ${port} `))