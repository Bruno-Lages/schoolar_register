import multer from 'multer';

const multerConfig = require('./../config/multer');

const upload = multer(multerConfig).single('photo');

class ImageController{
    async create(req, res){
        return upload(req, res, (error) => {
            if(error) return res.status(400).send(error)
            
            console.log('controlller: ', req.file);
            res.json(req.file);
        })
    }
}

module.exports = new ImageController;