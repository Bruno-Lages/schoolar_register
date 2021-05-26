const dbconfig =  require('./../config/database');
const Sequelize = require('sequelize');

const connection = new Sequelize(dbconfig);

const Student = require('./../models/studentModel');
const User = require('./../models/userModel');

const model = [Student, User];

model.forEach((model) => {
    model.init(connection);
});