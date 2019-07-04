`use strict`

const express = require(`express`)
const bodyParser = require(`body-parser`)
const mongooze= require(`mongoose`)
const app = express()
const Product= require('./models/product')
const port=process.env.Port||3000
//const db=require("./db")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const MongoClient = require(`mongodb`).MongoClient;
const uri = "mongodb+srv://dbUser:test12@restapi-b8c82.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser:true });
client.connect(err => {
    const collection = client.db("restAPI").collection("devices");
    // perform actions on the collection object
    client.close();
});

mongooze.connect(`mongodb://localhost:27017/shop`,(err,res)=>{
    if(err)throw err
    console.log('connection with db establish')
    app.listen(port,()=>{
        console.log(`api rest using localhost:${port}`)
    })
})


app.get('/hola',(req,res)=>{
    res.send({message:'hola mundo'})
})

app.get('/hola/:name',(req,res)=>{
    res.send({message:`hola mundo2 ${req.params.name}`})
})

app.get('/api/product',(req,res)=>{
    res.send(200,{product:[]})
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

    product.save((err, productStore)=> {
        if (err) res.status(500).send({message: `error when saving to db ${err}`})
        res.status(200).send({product: productStore})
    })
})
