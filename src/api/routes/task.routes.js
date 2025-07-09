// task.routes.js
const express = require('express');
const router = express.Router();
const auth = require('../../infrastructure/middlewares/auth.middleware');
const { create, getAll, update, remove } = require('../controllers/task.controller');

router.use(auth); // proteger todas las rutas
router.post('/', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

