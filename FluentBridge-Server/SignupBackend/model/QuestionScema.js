/*
{
    id: 10,
        question: "Where specifically does William feel the pain in his back?",
    answers: [
    {
        text: "Upper back",
        correct: false,
    },
    {
        text: "Middle back",
        correct: false,
    },
    {
        text: "Lower back",
        correct: true,
    },
    {
        text: "Entire back",
        correct: false,
    },
],
},*/
// models/Quiz.js

const mongoose = require("mongoose");



const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            text: {
                type: String,
                required: true
            },
            correct: {
                type: Boolean,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Question', QuestionSchema);
