// controllers/WordListController.js

const User = require('../model/UserSchema');

const saveWordList = async (req, res) => {
    try {
        const { wordList } = req.body;
        const userId = req.user.id; // Assuming you have user ID available in req.user after token verification

        // Find the user by ID and update the word list
        const user = await User.findByIdAndUpdate(userId, { $push: { wordLists: wordList } }, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { saveWordList };