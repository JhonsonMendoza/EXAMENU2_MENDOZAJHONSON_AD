// task.controller.js
const {
  createTask,
  getUserTasks,
  updateUserTask,
  deleteUserTask,
} = require('../../domain/use-cases/task.use-cases');

const create = async (req, res) => {
  try {
    const task = await createTask({ ...req.body, user: req.userId });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const tasks = await getUserTasks(req.userId);
  res.json(tasks);
};

const update = async (req, res) => {
  try {
    const task = await updateUserTask(req.params.id, req.userId, req.body);
    res.json(task);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await deleteUserTask(req.params.id, req.userId);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

module.exports = { create, getAll, update, remove };
