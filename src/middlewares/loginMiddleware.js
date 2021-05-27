const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if (!authorization) return res.send('inexistent token');

    const token = authorization.split(' ')[1];

    try{
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        if(!data) return res.status(400).send('invalid token');
        const {email, id} = data;
        req.userid = id;
        req.userEmail = email;
        return next();
    } catch(e){
        res.send(e);
    }
}