import { Request, Response, Router } from "express";
import { Todo } from "../models/todo";
// const Todo = require("../models/todo");

exports.create = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    // const todo = Todo.build({title, description});
    Todo.create({ title, description }).then((val) => {
      return res.status(200).send({ result: val, status: true });
    });
    // await todo.save();
  } catch (err) {
    console.log(err);
  }
  return;
};

exports.findOne = async (req: Request, res: Response) => {
  const todo = await Todo.find({});
  return res
    .status(200)
    .send({ result: todo, status: true, message: "success" });
};
