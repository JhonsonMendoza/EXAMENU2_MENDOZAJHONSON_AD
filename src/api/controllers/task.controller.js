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
  try {
    const tasks = await getUserTasks(req.userId);

    if (!tasks || tasks.length === 0) {
      return res.status(200).json({ message: 'No tienes tareas registradas' });
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};

const update = async (req, res) => {
  try {
    const task = await updateUserTask(req.params.id, req.userId, req.body);

    if (!task) {
      return res.status(403).json({ message: 'No tienes permiso para actualizar esta tarea o no existe' });
    }

    res.json(task);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await deleteUserTask(req.params.id, req.userId);

    if (!deleted) {
      return res.status(403).json({ message: 'No tienes permiso para eliminar esta tarea o no existe' });
    }

    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

module.exports = { create, getAll, update, remove };
