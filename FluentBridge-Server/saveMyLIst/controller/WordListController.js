// WordListController.js

const WordList = require('../models/WordList');

// Function to save the word list
const saveWordList = async (userId, wordList) => {
    try {
        const existingList = await WordList.findOne({ userId });

        if (existingList) {
            // Update existing list
            existingList.words = wordList;
            await existingList.save();
        } else {
            // Create new list
            await WordList.create({ userId, words: wordList });
        }

        return { success: true, message: 'Word list saved successfully' };
    } catch (error) {
        console.error('Error saving word list:', error);
        return { success: false, message: 'Failed to save word list' };
    }
};

module.exports = { saveWordList };
