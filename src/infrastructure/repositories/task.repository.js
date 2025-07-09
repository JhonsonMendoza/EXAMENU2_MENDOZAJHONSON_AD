// task.repository.js
const Task = require('../../domain/models/task.model');

const createTask = async (taskData) => new Task(taskData).save();
const getTasksByUser = async (userId) => Task.find({ user: userId });
const getTaskById = async (id) => Task.findById(id);
const updateTask = async (id, updateData) => Task.findByIdAndUpdate(id, updateData, { new: true });
const deleteTask = async (id) => Task.findByIdAndDelete(id);

module.exports = { createTask, getTasksByUser, getTaskById, updateTask, deleteTask };
