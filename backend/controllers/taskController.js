const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      tasks,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({
      task,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({
        message: "no task found",
      });
    }
    res.status(200).json({
      task,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        message: "no task found",
      });
    }
    res.status(200).send("task deleted");
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        message: "no task found",
      });
    }
    res.status(200).send({
      task,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
