// routes/wordListRoute.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/AuthMiddleware');
const {saveWordList} = require('../controller/WordListController')

// Route for saving word list to the database
router.route('/').post(saveWordList);
module.exports = router;