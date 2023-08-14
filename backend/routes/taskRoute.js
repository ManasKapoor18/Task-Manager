const express = require("express");
const Task = require("../models/taskModel");
const taskController = require("./../controllers/taskController");

const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getTask)
  .delete(taskController.deleteTask)
  .put(taskController.updateTask);

module.exports = router;
