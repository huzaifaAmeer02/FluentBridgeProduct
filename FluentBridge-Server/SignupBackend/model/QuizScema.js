// models/Quiz.js
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Quiz', QuizSchema);
