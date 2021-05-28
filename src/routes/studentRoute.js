const route = require('express').Router();
const studentController = require('./../controllers/studentController');

route.put('/create', studentController.create);
route.get('/', studentController.index);
route.get('/:id', studentController.show);
route.put('/update/:id', studentController.update);
route.delete('/delete/:id', studentController.delete);

module.exports = route;