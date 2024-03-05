import {response, Router} from "express";

const router = Router();

/*importing controllers*/
import * as controller from "../Controllers/Controller.js"

/*Questions Routes API*/

router.route('/questions')
    .get(controller.getQuestions)/*GET Request*/
    .post(controller.insertQuestions)/*POST Request*/
    .delete(controller.dropQuestions)/*DELETE Request*/

router.route('/results')
    .get(controller.getResults)
    .post(controller.storeResults)
    .delete(controller.deleteResults)



export default router