// QuestionController.js
const QuestionModel = require("../model/QuestionScema");

const getAllQuestions = async (req, res) => {
    const { jobTitle } = req.query;
    try {
        let questions;
        if (jobTitle) {
            questions = await QuestionModel.find({ jobTitle }).exec();
        } else {
            questions = await QuestionModel.find().exec();
        }
        return res.status(200).json({
            status: true,
            questions,
            success: { message: "Successfully fetched questions" }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err.message,
            success: { message: "Failed to fetch questions" }
        });
    }
};

module.exports = {
    getAllQuestions
};
