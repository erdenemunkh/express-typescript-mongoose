import { Request, Response, Router } from 'express';
const router = Router();

const todo = require("../controllers/todo.controller");
router.get("/todo", todo.findOne);
router.post("/todo", todo.create);
export {router as todoRouter}

