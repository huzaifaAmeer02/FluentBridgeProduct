import express from "express";
import morgan from "morgan"
import cors from "cors"
import {config} from "dotenv";

const app = express(); // Call the express function to create an instance of the application

/*middle ware*/
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

/*routes*/
app.get("/", (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
});

app.listen(3000, () => {
    console.log("Server Connected to http://localhost:3000");
});

