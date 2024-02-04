const { User } = require('../models');

// Criand usuário

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
    return true;
};

// Encontrando todos os users
const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

// Encontrando user pelo Id
const getUserById = async (id) => User
.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    
module.exports = { 
    createUser,
    getAllUsers,
    getUserById,
 };