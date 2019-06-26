`use strict`

const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()
const port=process.env.Port||3001
const db=require("./db")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`hello world using localhost:${port}`)
})
app.get('/hola',(req,res)=>{
    res.send({message:'hola mundo'})
})

app.get('/hola/:name',(req,res)=>{
    res.send({message:`hola mundo2 ${req.params.name}`})
})

db.connect((err)=>{
    if(err){
        console.log("unable to connect to DB")
        process.exit(1);
    }else{
        app.listen(port,()=>{
            console.log("connect to db")
        })
    }
})