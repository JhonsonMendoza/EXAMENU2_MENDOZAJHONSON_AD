// user.repository.js
const User = require('../../domain/models/user.model');

const findByEmail = async (email) => User.findOne({ email });
const createUser = async (userData) => new User(userData).save();
const findById = async (id) => User.findById(id);

module.exports = { findByEmail, createUser, findById };
