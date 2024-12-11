import express, { RequestHandler } from "express";

import todoController from "../controllers/todo.controller";

const router = express.Router();


router.get('/get/:userId',todoController.getTodos as RequestHandler);


router.get('/register/',todoController.addTodo as RequestHandler);






export default router;