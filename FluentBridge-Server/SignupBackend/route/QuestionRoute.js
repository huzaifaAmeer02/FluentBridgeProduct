const express = require('express');

const Question = require("../controller/QuestionController");


const router = express.Router();
router.get('/questions', Question.getAllQuestions);

module.exports=router;