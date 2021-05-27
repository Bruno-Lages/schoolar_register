const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserModel {
    async create(req, res){
        const {email, password} = req.body;
        
        if (!email || !password) return res.status(400).send('missing data');

        const user = await User.findOne({ where: {email} });

        if(!user) return res.status(400).send('unexistent user');

        if(!(await user.checkPassword(password))) return res.status(400).send('invalid password');
        
        const {id} = user;

        const token = jwt.sign({ id, email}, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION});

        res.send(token);
    }
};

module.exports = new UserModel();