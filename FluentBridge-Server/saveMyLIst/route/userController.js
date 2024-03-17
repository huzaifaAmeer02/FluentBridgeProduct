// UserController.js (after signup or login)
const WordListController = require('../controllers/WordListController');

// After signup or login
const userId = 'user_id_from_signup_or_login';
const wordList = ['word1', 'word2', 'word3']; // Get the word list from wherever it's generated

const saveListResult = await WordListController.saveWordList(userId, wordList);
if (saveListResult.success) {
    console.log(saveListResult.message);
} else {
    console.error(saveListResult.message);
}
