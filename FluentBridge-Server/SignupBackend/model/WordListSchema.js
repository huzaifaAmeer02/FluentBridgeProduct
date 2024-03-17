const mongoose = require('mongoose');

const WordListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  words: [{ type: String }],
});

module.exports = mongoose.model('WordList', WordListSchema);