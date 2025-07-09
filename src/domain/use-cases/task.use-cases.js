// task.use-cases.js
const taskRepo = require('../../infrastructure/repositories/task.repository');

const createTask = async (data) => taskRepo.createTask(data);
const getUserTasks = async (userId) => taskRepo.getTasksByUser(userId);
const updateUserTask = async (taskId, userId, data) => {
  const task = await taskRepo.getTaskById(taskId);
  if (!task || task.user.toString() !== userId) throw new Error('Not authorized');
  return taskRepo.updateTask(taskId, data);
};
const deleteUserTask = async (taskId, userId) => {
  const task = await taskRepo.getTaskById(taskId);
  if (!task || task.user.toString() !== userId) throw new Error('Not authorized');
  return taskRepo.deleteTask(taskId);
};

module.exports = { createTask, getUserTasks, updateUserTask, deleteUserTask };
