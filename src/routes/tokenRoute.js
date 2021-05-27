const route = require('express').Router();
const tokenController = require('../controllers/tokenController');

route.post('/', tokenController.create);

module.exports = route;