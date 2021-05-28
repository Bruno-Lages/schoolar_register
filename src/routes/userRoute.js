const route = require('express').Router();
const userController = require('./../controllers/userController');
const loginMiddleware = require('./../middlewares/loginMiddleware');

route.post('/create', userController.create);

route.get('/', loginMiddleware, userController.index);
route.get('/:id', userController.show);

route.put('/update', loginMiddleware, userController.update);
route.delete('/delete', loginMiddleware, userController.delete);

module.exports = route;