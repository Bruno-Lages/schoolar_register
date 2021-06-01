const route = require('express').Router();

const loginMiddleware = require('./../middlewares/loginMiddleware');

const imageController = require('./../controllers/imageController');

route.post('/', loginMiddleware, imageController.create);

module.exports = route;