const LoginService = require('../services/LoginService');
const { createToken } = require('../auth/authFunctions.js');

const loginField = async (req, res) => {
    try {
        const fieldValid = (email, password) => email && password;
        const { email, password } = req.body;
        
         if (!fieldValid(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
         }

        const userFound = await LoginService.loginField(email, password);
        console.log('USER antes do if', userFound);
        if (!userFound) {
            // console.log('USER dentro do if', userFound);
            return res.status(400).json({ message: 'Invalid fields' });
        }
        const token = createToken(email);
        return res.status(200).json({ token });
      } catch (error) {
        return res
          .status(500)
          .json({ message: 'Erro login falhou' });
      }
};

module.exports = {
    loginField,
};