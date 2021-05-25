const dbconfig =  require('./../config/database');
const Sequelize = require('sequelize');

const connection = new Sequelize(dbconfig);

const Student = require('./../models/studentModel');



Student.init(connection);