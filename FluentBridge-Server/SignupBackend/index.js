/*
* express (npm i express)
* mongoose (npm i mongoose)
* nodemon (npm install -g nodemon)
* dotenv (npm i dotenv)
* body-parser (npm i body-parser)
* bcrypt (npm i bcrypt)
* jsonwebtoken (npm i jsonwebtoken)
*
* */

const cors = require('cors')
const express= require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT | 3000;
const app = express();
app.use(cors())

const userRoute = require('./route/UserRoute');
const customerRoute = require('./route/CustomerRoute');

//-----------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
try{
    mongoose.connect('mongodb://127.0.0.1:27017/fluentBridge');
    app.listen(port,()=>{
        console.log(`server Started & running on port ${port}`);
    })
}catch (e){
    console.log(e);
}

app.get('/test-api',(req,resp)=>{
    return resp.json({'message':'Server Started!'})
})

//------------
app.use('/api/v1/users',userRoute);


app.use('/api/v1/customers',customerRoute);