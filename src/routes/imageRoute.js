const route = require('express').Router();

const imageController = require('./../controllers/imageController');

route.post('/', imageController.create);

module.exports = route;