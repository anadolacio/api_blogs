const UserService = require('../services/UserService');
const { createToken } = require('../auth/authFunctions.js');

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
       
        await UserService.createUser(displayName, email, password, image);
        
        const tokenGenerate = createToken(email);

        return res.status(201).json({ token: tokenGenerate });
    } catch (error) {
        return res.status(500).json({ message: 'User not created' });
    }
};

const getAllUsers = async (req, res) => {
    try { 
        const allUsers = await UserService.getAllUsers();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: 'Error' });
}
};

const getUserById = async (req, res) => {
    const { id } = req.params;
        const user = await UserService.getUserById(id);
        
        if (user === null || !user) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(user);
    };

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};