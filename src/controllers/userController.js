const { username } = require('../config/database');
const User = require('./../models/userModel');

class UserController{
    async create(req, res){
        try{
            const creation = await User.create(req.body);
            //const users = await User.findAll();
            res.send(creation);
        } catch(e){
            res.status(400).json(e.errors.map((e) => e.message));
        }
    };

    async index(req, res){
        try{
            const listen = await User.findAll();
            res.send(listen);
        } catch(e){
            console.log(e);
        }
    };

    async show(req, res){
        try{
            const user = await User.findByPk(req.params.id);
            res.send(user);
        } catch(e){
            console.log(e);
        }
    };

    async update(req, res){
        try{
            if(!req.params.id) return res.status(400).send("missing id");
            
            const user = await User.findByPk(req.params.id);

            if (!user) return res.status(400).send("user doesn't exist");

            const updatedUser = await user.update(req.body);
            res.json(updatedUser);
        } catch(e){
            //console.log(e);
            res.send(e);
        }
    };

    async delete(req, res){
        try{
            if(!req.params.id) return res.status(400).send('missing id');

            const user = await User.findByPk(req.params.id);

            if(!user) return res.status(400).send('unexistent user');

            const deleted = await user.destroy();
            res.send(user);
        } catch(e){
            res.send(e);
        }
    }
};

module.exports = new UserController();