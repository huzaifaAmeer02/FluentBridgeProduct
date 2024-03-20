const mongoose = require('mongoose');

const WordListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    words: [{
        type: String,
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    // Additional fields can be added as needed
});

module.exports = mongoose.model('WordList', WordListSchema);
