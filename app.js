import express from 'express';
import homeRoute from './src/routes/homeRoute';
import dotenv from 'dotenv';
dotenv.config();

import './src/database';

class App {
    constructor(){
        this.app = express();
        this.middlewares()
        this.routes();
    }

    routes(){
        this.app.use('/', homeRoute);
    };

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
}

export default new App().app;