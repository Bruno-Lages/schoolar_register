import multer from 'multer';

const multerConfig = require('./../config/multer');

const PhotoModel = require('./../models/photoModel');

const upload = multer(multerConfig).single('photo');

class ImageController{
    create(req, res){
        return upload(req, res, async (error) => {
            try{
                if(error) return res.status(400).send(error)
                
                console.log('controlller: ', req.file, '   id:', req.body.student_id);
                
                const {filename, originalname} = req.file;
                const {student_id} = req.body
                
                const store = await PhotoModel.create({original_name: originalname, filename, student_id})
                
                res.json(req.file);
            } catch(e){
                res.status(400).send(e);
            }
        })
    }
}

module.exports = new ImageController;