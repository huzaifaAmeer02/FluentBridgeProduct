import Question from "../Models/QuestionSchema.js";
import Result from "../Models/ResultSchema.js";
import questions,{answers} from '../Database/Data.js';

export async function getQuestions(req, res) {
    try {
        const q = await Question.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function insertQuestions(req, res) {
    try {
        await Question.deleteMany(); // Clear existing questions
        const insertedQuestions = await Question.create({ questions, answers }); // Insert new questions with answers
        res.json({ msg: "Data Saved Successfully", data: insertedQuestions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export async function deleteQuestions(req, res) {
    try {
        await Question.deleteMany();
        res.json({ msg: "All questions deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getResults(req, res) {
    try {
        const r = await Result.find();
        res.json(r);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function storeResults(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

        const newResult = new Result({ username, result, attempts, points, achieved });
        await newResult.save();

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteResults(req, res) {
    try {
        await Result.deleteMany();
        res.json({ msg: "All results deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
