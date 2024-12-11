import express, { RequestHandler } from "express";

import todoController from "../controllers/todo.controller";

const router = express.Router();


router.get('/get/:userId',todoController.getTodos as RequestHandler);


router.post('/register',todoController.addTodo as RequestHandler);

router.delete('/delete/:todoId',todoController.deleteTodo as RequestHandler);

router.put('/complete/:todoId',todoController.confirmTodo as RequestHandler);





export default router;