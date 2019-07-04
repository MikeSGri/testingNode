/*
const mongoClient=require("mongodb").MongoClient
const objectId= require("mongodb").ObjectID
const dbName= "restAPI"
const url= "mongodb://localhost:27017"
const mongoOptions={useNewUrlParser:true}
const state= {db:null}
const connect = (cb) =>{
    if(state.db){
        cd()
    }else{mongoClient.connect(url,mongoOptions,(err,client)=>{
        if(err){
           cb(err)
        }else{
            state.db=client.db(dbName)
            cd()
        }
    })
}}
const getPrimaryKey=(_id)=>{
    return ObjectID(_id)
}
const getDB=()=>{
    return state.db
}
module.exports={getDB,connect,getPrimaryKey}*/