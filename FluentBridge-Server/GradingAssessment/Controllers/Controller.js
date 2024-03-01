

/*get all the questions*/
export async function getQuestions(req,res){
    res.json("Questions API GET Request H");
}

/*insert all the questions*/
export async function insertQuestions(req,res){
    res.json("Questions API POST Request H")
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