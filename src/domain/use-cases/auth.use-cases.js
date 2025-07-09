// auth.use-cases.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepo = require('../../infrastructure/repositories/user.repository');

const registerUser = async ({ name, email, password }) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw new Error('Email already in use');
  const hashed = await bcrypt.hash(password, 10);
  return userRepo.createUser({ name, email, password: hashed });
};

const loginUser = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, "supersecreto123", { expiresIn: '1h' });
  return { token };
};

module.exports = { registerUser, loginUser };
