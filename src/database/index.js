const dbconfig =  require('./../config/database');
const Sequelize = require('sequelize');

const connection = new Sequelize(dbconfig);

const Student = require('./../models/studentModel');
const User = require('./../models/userModel');
const Photo = require('./../models/photoModel');

const models = [Student, User, Photo];

models.forEach((model) => {
    model.init(connection);
});

models.forEach((model) => model.associate && model.associate(connection.models));