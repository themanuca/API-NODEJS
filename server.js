const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes')

require('dotenv').config();

const app = express();

const port = process.env.Port||5000;

mongoose.connect(process.env.Mongo_URL,{

}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("MongoDB ON")
    }
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port,function(){
    console.log("server on");
})