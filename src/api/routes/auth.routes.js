// auth.routes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

console.log('register is:', typeof register); // debería decir 'function'
router.post('/register', register);
router.post('/login', login);

module.exports = router; // ✅ Exporta directamente el router

