import express from "express";
import morgan from "morgan"
import cors from "cors"
import {config} from "dotenv";
import router from "./Router/Route.js";

/*importing the connection file*/
import connect from "./Database/conn.js"


const app = express(); // Call the express function to create an instance of the application

/*middle ware*/
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/*application port*/
const port = process.env.PORT || 3000;


/*routes*/
app.use('/api',router)


app.get("/", (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
});

connect().then(() =>{
    try {
        app.listen(port, () => {
            console.log(`Server Connected to http://localhost:${port}`);
        });
    }catch (error){
        console.log("Cannot connect to the server !")
    }
}).catch(error =>{
    console.log("Invalid DB Connection")
})
