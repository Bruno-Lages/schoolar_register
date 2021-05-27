const route = require('express').Router();
const userController = require('./../controllers/userController');
const loginMiddleware = require('./../middlewares/loginMiddleware');

route.post('/create', userController.create);
route.get('/', loginMiddleware, userController.index);
route.get('/:id', userController.show);
route.put('/update/:id', userController.update);
route.delete('/delete/:id', userController.delete);

module.exports = route;