/*
* express (npm i express)
* mongoose (npm i mongoose)
* nodemon (npm install -g nodemon)
* dotenv (npm i dotenv)
* body-parser (npm i body-parser)
* bcrypt (npm i bcrypt)
* jsonwebtoken (npm i jsonwebtoken)
* npm install cors
* npm install nodemailer
*
* to run -> nodemon


* */

const cors = require('cors')
const express= require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT || 4000;
const app = express();
app.use(cors())

const userRoute = require('./route/UserRoute');
const questionRoute = require('./route/QuestionRoute');
const wordListRoute = require('./route/WordListRoute');
// const customerRoute = require('./route/customerRoute');

//-----------------------Signup Comments are below---------------------------//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1/users',userRoute);
app.use('/api/v1/question',questionRoute);
app.use('/api/saveWordList' ,wordListRoute )


// app.use('/api/v1/customers',customerRoute);

app.get('/test-api',(req,resp)=>{
    return resp.json({'message':'Server Started!'})
})
app.get('/getQuestions', (req, res)=>{

})

const connectDb = async ()=>{
    return await mongoose.connect('mongodb://127.0.0.1:27017/fluentBridge');

}
try{
    // mongoose.connect('mongodb://127.0.0.1:27017/fluentBridge');
    app.listen(port,()=>{
        console.log(`server Started & running on port ${port}`);
    })
    connectDb().then(()=>{
        console.log("connected to db");
    })
        .catch((err)=>{
            console.log(err)
        })
}catch (e){
    console.log(e);
}

//------------