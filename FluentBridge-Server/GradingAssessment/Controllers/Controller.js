import Questions from "../Models/QuestionSchema.js";
import Results from "../Models/ResultSchema.js";

/*get all the questions*/
export async function getQuestions(req,res){
    try{
        const q = await Questions.find()
        res.json(q)
    }catch (error){
        res.json({error})
    }
}

/*insert all the questions*/
export async function insertQuestions(req,res){
    try{
        Questions.insertMany({ questions : [0], answers : []})
    }catch (error){
        res.json({error})
    }
}

/*Delete all questions*/
export async function deleteQuestions(req,res){
    res.json("Questions API DELETE Request H")
}

/*get all results*/
export async function getResults(req,res){
    res.json("Results GET API Request")
}
/*Insert Results*/
export async function storeResults(req,res){
    res.json("Results POST API Request")
}
/*delete results*/
export async function deleteResults(req,res){
    res.json("Results DELETE API Request")
}