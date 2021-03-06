`use strict`

const express = require(`express`)
const bodyParser = require(`body-parser`)
const mongoose= require(`mongoose`)
const app = express()
const Product= require('./models/product')
const port=process.env.Port||3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://dbUser:test12@restapi-b8c82.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser:true })
    console.log("db connected")

    app.listen(port,()=>{
        console.log(`api rest using localhost:${port}`)
    })

app.get('/api/product',(req,res)=>{
    res.send(200,{product:[]})
})

app.get('/api/product/:productId',(req,res)=>{
   
})

app.post('/api/product',(req,res)=>{
    console.log('POST /api/product')
    console.log(req.body)

        let product = new Product()
        product.name= req.body.name
        product.picture= req.body.picture
        product.price= req.body.price
        product.category= req.body.category
        product.description= req.body.description

        product.save((err, productStored)=> {
            if (err) res.status(500).send({message: `error when saving to db ${err}`})
            res.status(200).send({product: productStored})
    })
})