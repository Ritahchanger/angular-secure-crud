import express, { RequestHandler } from "express"

import authenticationController from "../controllers/authentication.controller";


const router = express.Router();


router.post('/signup',authenticationController.signUp as RequestHandler);

router.post('/login',authenticationController.login as RequestHandler);


export default router;