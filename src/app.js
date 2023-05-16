const express = require('express');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
// const loginMiddleware = require('./Middlewares/loginMiddleware');
const userMiddleware = require('./Middlewares/userMiddleware');
const { validateJwt } = require('./Middlewares/validateJWT');
const CategoryController = require('./controllers/CategoryController');
const PostController = require('./controllers/PostController');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
// ...
// Login

app.post('/login', LoginController.loginField);

// User
app.post('/user', userMiddleware.userValidation, UserController.createUser);
app.get('/user', validateJwt, UserController.getAllUsers);
app.get('/user/:id', validateJwt, UserController.getUserById);

// Category

app.post('/categories', validateJwt, CategoryController.createCategory);
app.get('/categories', validateJwt, CategoryController.getAllCategories);

// Posts

app.get('/post', validateJwt, PostController.getAllPosts);
app.get('/post/:id', validateJwt, PostController.getPostById);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
