const QuestionModel = require("../model/QuestionScema");

const getAllQuestions = async (req, res) => {
    try {
        const questions = await QuestionModel.find().exec();
        return res.status(200).json({
            status: true,
            question:questions,
            success: {message: "successfully fetched questions"}
        })
    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err.message,
            success: {message: "failed to fetch questions"}
        })
    }
}
/**/
module.exports = {
    getAllQuestions
}
