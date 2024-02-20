const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;

const customerRoute = require('./route/customerRoute')

const app = express();

    /*=======body parser==========*/
    app.use(bodyParser.urlencoded({extended:false}))

    app.use(bodyParser.json());

    /*=======body parser==========*/

    mongoose.connect('mongodb://127.0.0.1:27017/customer_crud')/*return promise in here so we can use "then"  */
    .then(()=>{/*call back function*/
       app.listen(port,()=>{
           console.log(`api started and running on port ${port}`)
       });
    });

    app.use('/api/v1/customers',customerRoute);/*http://localhost:3000/api/v1/customers/save-customer*/

    app.use('/',(req, resp,next)=>{
        resp.send('<h1>Server works</h1>')
    });
