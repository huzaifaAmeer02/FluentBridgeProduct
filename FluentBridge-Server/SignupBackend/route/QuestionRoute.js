const express = require('express');

const Question = require("../controller/QuestionController");


const router = express.Router();
router.get('/get_questions', Question.getAllQuestions);

module.exports=router;