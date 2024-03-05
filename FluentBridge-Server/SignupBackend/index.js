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