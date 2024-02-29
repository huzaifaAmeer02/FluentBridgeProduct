import {response, Router} from "express";

const router = Router();

/*Questions Routes API*/

router.get('questions',(req,res) =>{
    response.json("Questions API get request")
})




export default router