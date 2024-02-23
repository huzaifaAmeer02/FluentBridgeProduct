/*
* express (npm i express)
* mongoose (npm i mongoose)
* nodemon (npm i nodemon -g (sudo))
* dotenv (npm i dotenv)
* body-parser (npm i body-parser)
* bcrypt (npm i bcrypt)
* jsonwebtoken (npm i jsonwebtoken)
*
* */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;

const customerRoute = require('./route/customerRoute')
const userRoute = require('./route/UserRoute')

const app = express();
app.use(cors())


    /*=======body parser==========*/
    app.use(bodyParser.urlencoded({extended:false}))

    app.use(bodyParser.json());

    /*=======body parser==========*/

    try{
        mongoose.connect('mongodb://127.0.0.1:27017/posapi');
        app.listen(port,()=>{
            console.log(`server Started & running on port ${port}`);
        })
    }catch (e){
        console.log(e);
    }

    app.get('/test-api',(req,resp)=>{
        return resp.json({'message':'Server Started!'})
    })


    app.use('/api/v1/customers',customerRoute);/*http://localhost:3000/api/v1/customers/save-customer*/
    app.use('/api/v1/users',userRoute);


