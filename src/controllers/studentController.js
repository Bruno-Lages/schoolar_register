const Student = require('./../models/studentModel');
const Photo = require('./../models/photoModel');

class StudentController{

    async create(req, res){
        const newUser = await Student.create(req.body);

        res.send('user deleted');
    }
    async index(req, res) {
        const students = await Student.findAll({
            attributes: ['id', 'name', 'last_name', 'email', 'birthday'],
            include: {
                model: Photo,
                attributes: ['filename']
            }
        });
        res.send(students);
    };

    async show(req, res) {
        const student = await Student.findByPk(req.params.id, {
            attributes: ['id', 'name', 'last_name', 'email', 'birthday'],
            include: {
                model: Photo,
                attributes: ['filename']
            }
        });

        if (!student) return res.status(400).send('unexistent student');

        res.send(student);
    }

    async update(req, res) {
        try{
            const user = await Student.findByPk(req.params.id);
            const updatedStudent = await user.update(req.body);
            res.send(updatedStudent);
        } catch(e) {
            res.send(e);
        }
    }

    async delete(req, res) {
        const user = await Student.findByPk(req.params.id);

        if (!user) return res.status(400).send('unexistent student');

        const deletedStudent = user.destroy();
        res.send(deletedStudent);
    }

}

module.exports = new StudentController();