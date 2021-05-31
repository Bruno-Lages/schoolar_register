import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import homeRoute from './src/routes/homeRoute';
import userRoute from './src/routes/userRoute';
import tokenRoute from './src/routes/tokenRoute';
import studentRoute from './src/routes/studentRoute';
import imageRoute from './src/routes/imageRoute';

import './src/database';

class App {
    constructor(){
        this.app = express();
        this.middlewares()
        this.routes();
    }

    routes(){
        this.app.use('/', homeRoute);
        this.app.use('/users', userRoute);
        this.app.use('/token', tokenRoute);
        this.app.use('/students', studentRoute);
        this.app.use('/images', imageRoute);
    };

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
}

export default new App().app;