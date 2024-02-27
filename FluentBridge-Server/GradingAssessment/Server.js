import express from "express"

const app = express

/*routes*/
app.get("/gradingquiz",(req, res) => {
    try {
        res.json("Get Request")
    }catch (error){
        res.json(error)
    }
})